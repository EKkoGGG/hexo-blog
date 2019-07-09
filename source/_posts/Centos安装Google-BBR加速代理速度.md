---
title: Centos安装Google BBR加速代理速度
date: 2019-03-14 21:43:47
tags: 
- shadowsocks
- BBR
---

![](http://ww1.sinaimg.cn/large/79aa5f26gy1g1yybeui2zj20j806k461.jpg)

**什么是Google BBR:**
> **BBR**是Google 提出的一种新型拥塞控制算法（丢包时使用的算法），可以使 Linux 服务器显著地提高吞吐量和减少 TCP 连接的延迟。 
> BBR解决了两个问题： 在有一定丢包率的网络链路上充分利用带宽。非常适合高延迟，高带宽的网络链路。 


<!-- more -->

### 使用简介

1. 获得并且打开脚本(仅适用与Centos)
> wget https://raw.githubusercontent.com/tcp-nanqinlang/general/master/General/CentOS/bash/tcp_nanqinlang-1.3.2.sh
> bash tcp_nanqinlang-1.3.2.sh

2. 安装内核

> 选择1安装内核，其间一直Y同意
> 
![](http://ww1.sinaimg.cn/large/79aa5f26ly1g1irqlar4tj20hr064wej.jpg)

3. 重启VPS(服务器) —— **重要**
> reboot

4. 再次运行脚本开启算法
> bash tcp_nanqinlang-1.3.2.sh
> // 选2开启tcp_nanqinlang，搞定~

5. 因为重启过VPS，记得打开shadowsocks的服务
> ssserver -c /etc/shadowsocks.json -d start
> systemctl stop firewalld.service // 关掉防火墙
> systemctl disable firewalld.service

### 自此可以愉快的在油管1080P看视频啦~
