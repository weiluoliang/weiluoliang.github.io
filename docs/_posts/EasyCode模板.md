---
title: EasyCode模板
date: 2023-05-18 19:08:56
permalink: /pages/78f4cc/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: weiluoliang
  link: https://github.com/weiluoliang
---

## 说明
EasyCode是一个代码生成的IDEA插件，可以根据数据库表生成你想要的代码，代码可以自定义,在此记录下我自己使用的模板，方便下次查找。

## 模板

### PO模板
```java
##引入宏定义
$!{define.vm}
#set($tableName = $tool.append($tableInfo.name, "PO"))
##使用宏定义设置回调（保存位置与文件后缀）
$!callback.setFileName($tool.append($tableName, ".java"))
$!callback.setSavePath($tool.append($tableInfo.savePath, "/entities"))

##使用宏定义设置包后缀
#setPackageSuffix("entities")

##使用全局变量实现默认包导入
$!{autoImport.vm}
import java.io.Serializable;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

##使用宏定义实现类注释信息
#tableComment("实体类")
@Data
@TableName("$!{tableInfo.obj.name}")
public class $!{tableName} implements Serializable {
    private static final long serialVersionUID = $!tool.serial();

#foreach($column in $tableInfo.pkColumn)
    #if(${column.comment})/**
     * ${column.comment}
     */#end
    @TableId(value="$!column.obj.name",type = IdType.AUTO )
    private $!{tool.getClsNameByFullName($column.type)} $!{column.name};
#end

#foreach($column in $tableInfo.otherColumn)
    #if(${column.comment})/**
     * ${column.comment}
     */#end
    @TableField("$!column.obj.name")
    private $!{tool.getClsNameByFullName($column.type)} $!{column.name};
#end


}

```

### mapper.java 模板

```java
##定义初始变量
#set($tableName = $tool.append($tableInfo.name, "Mapper"))
##设置回调
$!callback.setFileName($tool.append($tableName, ".java"))
$!callback.setSavePath($tool.append($tableInfo.savePath, "/mapper"))


#if($tableInfo.savePackageName)package $!{tableInfo.savePackageName}.#{end}mapper;

import $!{tableInfo.savePackageName}.entities.$!{tableInfo.name}PO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * $!{tableInfo.comment}($!{tableInfo.name})表数据库访问层
 *
 * @author $!author
 * @since $!time.currTime()
 */
public interface $!{tableName} extends BaseMapper<$!{tableInfo.name}PO> {


}

```

### mapper.xml 模板 
```java
##引入mybatis支持
$!{mybatisSupport.vm}
#set($tableName = $tool.append($tableInfo.name, "PO"))
##设置保存名称与保存位置
$!callback.setFileName($tool.append($!{tableInfo.name}, "Mapper.xml"))
$!callback.setSavePath($tool.append($modulePath, "/src/main/resources/mapper/basic"))

##拿到主键
#if(!$tableInfo.pkColumn.isEmpty())
    #set($pk = $tableInfo.pkColumn.get(0))
#end

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="$!{tableInfo.savePackageName}.mapper.$!{tableInfo.name}Mapper">

    <resultMap type="$!{tableInfo.savePackageName}.entities.$!{tableName}" id="$!{tableInfo.name}Map">
#foreach($column in $tableInfo.fullColumn)
        <result property="$!column.name" column="$!column.obj.name" jdbcType="$!column.ext.jdbcType"/>
#end
    </resultMap>


</mapper>

```