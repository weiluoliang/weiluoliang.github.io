---
title: Spring原理
date: 2023-09-13 19:24:24
permalink: /pages/spring/
sidebar: auto
categories:
  - 随笔
tags:
  - spring
author: 
  name: weiluoliang
#   link: https://github.com/weiluoliang
---

## Spring的生命周期
Spring的生命周期就是从Spring 创建Bean，Bean使用，Bean销毁的整个过程。创建Bean是其中最复杂的过程，要解决很多问题，比如环境变量，Bean定义描述，Bean创建的方式（使用工厂还是其他构造函数，构造函数有多个选用哪个一个），创建的过程要进行动态代理，创建的过程可能会有循环引用又该如何解决？会有一系列的问题需要处理。  使用的过程就比较简单，就是调用Bean的方法完成业务，销毁的时候如果Bean有实现了destroy方法或者有`@PreDestroy`注解的话将会调用这个方法。**我们重点学习Bean的创建过程**。

<!-- more -->

### Bean的创建过程

![](https://www.luoliang.top/images/spring-01.jpg)

## Spring是如何解决循环依赖问题


## Spring的扩展点 


## Spring的事件机制  


## Spring AOP



## Spring事务管理


