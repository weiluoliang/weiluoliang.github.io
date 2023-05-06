---
title: powershell禁止运行脚本
date: 2023-05-06 15:38:36
permalink: /pages/957c4b/
sidebar: auto
categories:
  - 随笔
tags:
  - 编程技巧
author: 
  name: weiluoliang
  link: https://github.com/weiluoliang
---

原地址： [https://blog.csdn.net/qq_39290878/article/details/109738433](https://blog.csdn.net/qq_39290878/article/details/109738433)

## 异常信息
yarn : 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\yarn.ps1， 因为在此系统上禁止运行脚本

## 解决方案 
1. 开始菜单中搜索PowerShell以管理员身份打开
2. 执行：`set-ExecutionPolicy` RemoteSigned 选择 `y`
