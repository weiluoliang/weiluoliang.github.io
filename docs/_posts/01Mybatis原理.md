---
title: Mybatis原理
date: 2023-07-22 23:01:00
permalink: /pages/01mybatis/
sidebar: auto
categories:
  - 随笔
tags:
  - mybatis
author: 
  name: weiluoliang
  link: https://github.com/weiluoliang
# sticky: 100
---

## 设计背景
Mybatis被设计出来解决我们日常操作数据库的痛点，使用最原始的JDBC去操作需要注册驱动，获取连接，获取statement，设置参数，处理结果集等繁琐而没有技术含量的工作，有它即可不用手动设置参数，手动处理结果集等繁琐操作，把会帮我们映射好。并且动态sql拼接也更加方便的实现


## mybatis的结构

mybatis主要包含以下组件：
1. Configuration 
2. SqlSession
3. Executor 
4. StatementHandler
5. ParameterHandler
6. ResultSetHandler
7. TypeHandler 
8. MapperStatement
9. SqlSource
10. ResultMap
11. BoundSql 

![](https://wll01.oss-cn-hongkong.aliyuncs.com/blog/01mybatis-01.png)

## Mapper的执行过程

我们操作数据库一般都是通过写一个Mapper接口，剩下的操作都交给Mybatis去做了。Mapper并没有实现类，它是如何去生成一个实例，并且访问数据进行CRUD呢？当然是生成代理对象，通过动态代理拦截的方式实现具体的逻辑。

看流程图(我这里是通过MyBatis-Plus查看debug)：
![](https://wll01.oss-cn-hongkong.aliyuncs.com/blog/01mybatis-02.png)


## Mybatis缓存 
一级缓存是session级别的缓存，默认是开启，**但是在spring中如果没启动事务，每次获取的session都是新的，所以一级缓存会失效，只有开启了事务才会生效。**


美团技术关于缓存的解读： https://tech.meituan.com/2018/01/19/mybatis-cache.html


## Mybatis插件 

