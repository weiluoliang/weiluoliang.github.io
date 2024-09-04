(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{338:function(a,e,t){"use strict";t.r(e);var r=t(8),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("使用了微服务后，一般会有多个服务提供者，为了提高系统的性能和可用性，需要对请求进行负载均衡。负载均衡算法有轮询算法，加权轮询算法，随机算法，加权随机算法，最小活跃数算法，一致性Hash算法。")]),a._v(" "),e("h3",{attrs:{id:"负载均衡算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡算法"}},[a._v("#")]),a._v(" 负载均衡算法")]),a._v(" "),e("ol",[e("li",[a._v("轮询算法")]),a._v(" "),e("li",[a._v("随机算法")]),a._v(" "),e("li",[a._v("加权随机算法")])]),a._v(" "),e("h3",{attrs:{id:"spring-cloud-loadbalancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-loadbalancer"}},[a._v("#")]),a._v(" spring-cloud-loadbalancer")]),a._v(" "),e("p",[a._v("spring cloud 提供的客户端负载均衡和实现。")]),a._v(" "),e("ol",[e("li",[a._v("ReactiveLoadBalancer  响应式编程使用 "),e("code",[a._v("webClient")])]),a._v(" "),e("li",[a._v("BlockingLoadBalancerClient   传统的请求"),e("code",[a._v("RestTemplate")])])]),a._v(" "),e("h4",{attrs:{id:"目前实现的算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目前实现的算法"}},[a._v("#")]),a._v(" 目前实现的"),e("strong",[a._v("算法")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. RoundRobinLoadBalancer   // 轮询\n2. RandomLoadBalancer  // 随机\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"serviceinstancelistsupplier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceinstancelistsupplier"}},[a._v("#")]),a._v(" ServiceInstanceListSupplier")]),a._v(" "),e("p",[a._v("spring-cloud-loadbalancer 提供了很多的 **ServiceInstanceListSupplier ** ，对应不同的场景使用。")]),a._v(" "),e("p",[e("strong",[a._v("CachingServiceInstanceListSupplier")]),a._v("  缓存实现，如果每次请求都访问一次注册中心那么会很浪费性能。提供了缓存的能力，当放生远程调用时先到缓存里面找，如果能找到要调用的服务，就直接使用。")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("这里有一个坑，我在做优雅服务停机的时候遇到。当我关闭某个服务，该服务会主动下线，按道理调用方应该能感知到，我看nacos的源码，下线后会立马发送UDP报文通知其他服务，感知下线，但是我再实验的时候，发现下线的服务依然被调用，最后定位到是因为loadbalancer加了缓存，解决方案是起一个监听器，监听到服务下线，就清空缓存。")])]),a._v(" "),e("p",[e("strong",[a._v("ZonePreferenceServiceInstanceListSupplier")]),a._v(" 按区路由，优先调用同一个"),e("code",[a._v("zone")]),a._v("的服务，如果找不到就返回全部服务，再进入下一步负载均衡策略（随机or轮询）")]),a._v(" "),e("p",[e("strong",[a._v("SameInstancePreferenceServiceInstanceListSupplier")]),a._v(" 使用同一个服务进行调用")]),a._v(" "),e("h3",{attrs:{id:"程序启动初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序启动初始化"}},[a._v("#")]),a._v(" 程序启动初始化")]),a._v(" "),e("p",[a._v("在"),e("code",[a._v("LoadBalancerAutoConfiguration")]),a._v("中初始化了"),e("strong",[a._v("LoadBalancerInterceptor")]),a._v("，并把LoadBalancerInterceptor加入到restTemplate中"),e("code",[a._v("restTemplate.setInterceptors(list);")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://images.luoliang.top/blog/20240423180724.png",alt:""}})]),a._v(" "),e("h4",{attrs:{id:"执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[a._v("#")]),a._v(" 执行流程")]),a._v(" "),e("ol",[e("li",[a._v("restTemplate请求远程服务")]),a._v(" "),e("li",[a._v("进入到拦截器LoadBalancerInterceptor")]),a._v(" "),e("li",[a._v("拦截器从注册中心获取服务列表")]),a._v(" "),e("li",[a._v("根据配置的负载均衡策略选择服务")]),a._v(" "),e("li",[a._v("最后把地址的url替换成IP和端口")]),a._v(" "),e("li",[a._v("发送HTTP请求。")])]),a._v(" "),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.spring.io/spring-cloud-commons/docs/3.1.2/reference/html/#spring-cloud-loadbalancer",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档-spring-cloud-loadbalancer"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);