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