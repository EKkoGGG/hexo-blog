---
title: ubuntu 14.0 安装/卸载mysql方法
date: 2019-03-28 19:53:37
tags:
- mysql
- ubuntu
---

### ubuntu 14.0  完全卸载mysql方法:

> 1. ` sudo apt-get autoremove --purge mysql-server-5.0 `
> 
>（注：我删的时候，顺便把什么5.0/5.5/5.6版本都删一遍，不然的话会出现各种各样> 令你无法完成安装的情况）
> 
> 2. `sudo apt-get remove mysql-server`  
> 3. `sudo apt-get autoremove mysql-server`
> 4. ` sudo apt-get remove mysql-common `
>
> 第四条这个很重要，上面的其实有一些是多余的。但是执行一遍应该还是对的
<!-- more -->
### 安装mysql

1. `sudo apt-get install mysql-server`
>（这里面会有设置密码，如果没有的话，就是卸载没有完成，需要重新卸载）
2. `sudo apt-get install mysql-client`
3. `  sudo apt-get install php5-mysql `
>安装php5-mysql 是将php和mysql连接起来（php不是必须的，看需求决定是否安装）

**一旦安装完成，MySQL 服务器应该自动启动。**

- 可以在终端提示符后运行以下命令来检查 MySQL 服务器是否正在运行：
>` sudo netstat -tap | grep mysql `
- 当运行该命令时，可以看到类似下面的行：
> tcp        0      0 localhost:mysql         *:*                     > LISTEN      24449/mysqld
- 如果服务器不能正常运行，可以通过下列命令启动它：
> `sudo /etc/init.d/mysql restart`

写在最后，linux不同版本安装mysql的方法都不同，请选择适合系统版本的方法。

转载from：https://www.cnblogs.com/shetunxiang/p/4751406.html