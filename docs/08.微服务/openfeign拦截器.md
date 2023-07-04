---
title: openfeign拦截器
date: 2023-07-04 17:25:26
permalink: /pages/45c3f2/
categories:
  - 微服务
tags:
  - 
author: 
  name: weiluoliang
  link: https://github.com/weiluoliang
---

配置拦截器需要实现 `RequestInterceptor` 接口
```java
@Slf4j
public class FeignRequestInterceptor implements RequestInterceptor {

    public static final String TRACE_ID = "TRACE_ID";

    @Override
    public void apply(RequestTemplate requestTemplate) {
        String traceId = TraceIdUtil.getTraceId();
        log.info("拦截器获取 traceId = {} ", traceId );
        if(traceId != null){
            requestTemplate.header(TRACE_ID,traceId);
        }
    }
}
```

如果项目中使用了熔断器 `Hystrix` , 并且使用的是线程池模式，就会导致无法从ThreadLocal获取到参数，必须做下包装
```java

@Component
public class CustomizedHystrixConcurrencyStrategy extends HystrixConcurrencyStrategy {
 
    public CustomizedHystrixConcurrencyStrategy () {
        HystrixPlugins.reset();
        HystrixPlugins.getInstance().registerConcurrencyStrategy(this);
    }
 
    @Override
    public <T> Callable<T> wrapCallable(Callable<T> callable) {
        Map<String, String> map = MDC.getCopyOfContextMap();
        return () -> {
            try {
                MDC.setContextMap(map);
                return callable.call();
            } finally {
                MDC.clear();
            }
        };
    }
}

```