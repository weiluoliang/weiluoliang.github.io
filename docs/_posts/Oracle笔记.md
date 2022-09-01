---
title: Oracle笔记
date: 2022-09-01 18:21:58
permalink: /pages/1a38e5/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: weiluoliang
---







## 表操作



### 添加字段 

```SQL
-- Add/modify columns 
alter table 表名 add 字段名 NUMBER(1) default 0;
-- Add comments to the columns 
comment on column 表名.字段名 is '备注';
```



## JOB



### 查询JOB

```SQL

-- 当前用户定时任务
select  count (*)  from  user_jobs;

-- 有权限访问的定时任务
select  count (*)  from  all_jobs;

-- 整个数据库所有定时任务
select  count (*)  from  dba_jobs;

-- Oracle 19C 
select * from dba_scheduler_jobs where job_action like ('%存储过程%')
```



### 创建job

```SQL

declare
  x number(9);
begin
  sys.dbms_job.submit
    (
      job        => x
     ,what       => 'PRO_XXX(参数);'-- 存储过程名，可以是多个，用分号隔开
     ,next_date  => to_date('2022-09-01 23:59:00','yyyy-mm-dd hh24:mi:ss')
     ,interval   => 'FREQ=MINUTELY;INTERVAL=10' -- 循环频率为10分钟
     ,no_parse   => false
    );
    commit;
end;




```



### 删除JOB

```SQL
-- 删除JOB 
begin
  dbms_job.remove(job);--job为任务号 可用select j.* from  dba_jobs j
end;
```

