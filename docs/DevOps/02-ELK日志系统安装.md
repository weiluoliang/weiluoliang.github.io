---
title: ELK日志系统安装
date: 2023-11-21 16:02:32
permalink: /pages/a2eb25/
categories:
  - DevOps
tags:
  - 
author: 
  name: weiluoliang
  link: https://github.com/weiluoliang
---

## 前言
 本教程基于docker和docker-compose安装

## 安装
### 安装elasticsearch 
1. 创建用户，创建目录并授权
```bash
# 用户
sudo useradd elasticsearch
sudo groupadd elasticsearch 
sudo usermod -a -G elasticsearch elasticsearch

# 创建目录
mkdir -p /data/elk/es/{data,logs}

# 目录修改所有者为 elasticsearch
chown -R elasticsearch:elasticsearch es

# 临时启动一个容器获取配置文件拷贝出来，修改配置挂载
docker run --name elasticsearch -d elasticsearch:7.17.15
docker cp elasticsearch:/usr/share/elasticsearch/config /data/elk/es/
```

```yaml
version: '3.1'
services:
  elasticsearch:
    image: elasticsearch:7.17.15
    container_name: elasticsearch
    privileged: true
    environment:
      - "cluster.name=elasticsearch" #设置集群名称为elasticsearch
      - "discovery.type=single-node" #以单一节点模式启动
      - "ES_JAVA_OPTS=-Xms512m -Xmx2048m" #设置使用jvm内存大小
      - bootstrap.memory_lock=true
    volumes:
      - /etc/localtime:/etc/localtime
      - ./es/plugins:/usr/share/elasticsearch/plugins:rw #插件文件挂载
      - ./es/data:/usr/share/elasticsearch/data:rw #数据文件挂载
      - ./es/logs:/usr/share/elasticsearch/logs:rw
    ports:
      - 9200:9200
      - 9300:9300
    deploy:
     resources:
        limits:
           cpus: "2"
           memory: 2048M
        reservations:
           memory: 512M
```

#### 设置ES密码
修改配置  `vim elasticsearch.yml`
```yaml
xpack.security.enabled: true
xpack.license.self_generated.type: basic
xpack.security.transport.ssl.enabled: true

```

重启服务
```
docker restart elasticsearch
```

初始化密码
```bash

#进入容器
docker exec -it elasticsearch bash

# 初始化命令, 会同时初始化多个账号的密码，按提示操作即可
/usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive

```


### 安装kibana

1. 创建用户，目录，授权
```bash
sudo useradd kibana
sudo groupadd kibana 
sudo usermod -a -G kibana kibana

mkdir -p /data/elk/kibana/config

# 授权 
chown -R kibana:kibana kibana 


# 先随便运行一个节点，获取配置文件，从容器中拷贝出来
docker run --name kibana -d kibana:7.17.15

# 查询看运行是否正常 
docker logs -f kibana  
docker cp kibana:/usr/share/kibana/confg/kibana.yml /data/elk/kibana/config
docker rm -f kibana

# 创建docker-compose文件
vim docker-kibana.yaml

# 启动
docker-compose -f docker-kibana.yaml up -d 
```


```yaml
version: '3.1'
services:
  kibana:
    image: kibana:7.17.15
    container_name: kibana
    volumes:
      - /etc/localtime:/etc/localtime
    #  - /data/elk/kibana/config:/usr/share/kibana/config:rw
    #depends_on: 
     # - elasticsearch #kibana在elasticsearch启动之后再启动
    environment:
      ELASTICSEARCH_HOSTS: http://localhost:9200 #设置访问elasticsearch的地址
      I18N_LOCALE: zh-CN
    ports:
      - 5601:5601
```


### 配置密码登录



### logstash日志格式化

### filebeat配置 

