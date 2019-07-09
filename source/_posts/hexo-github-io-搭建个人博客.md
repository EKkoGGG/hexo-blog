---
title: hexo+github.io 搭建个人博客
date: 2019-03-04 23:46:46
tags: hexo
---

**操作系统**：win10

**环境**：Node.js,hexo，git

## 一、安装hexo (其他环境略过) 

1. npm install -g cnpm --registry=https://registry.npm.taobao.org

> 因网络问题，先安装指向淘宝的cnpm

2. cnpm install -g hexo-cli

> 安装hexo框架

<!-- more -->

1. hexo init

> 创建一个博客目录

4. hexo s

> 本地调试hexo博客

5. hexo n "博客名字"

> 新建博文

6. hexo g

> 生成博文

7. cnpm install hexo-deloyer-git --save

> 安装一键部署到github.io页面的工具

8. hexo d

> 全部博文同步到github.io页面



## 二、使用github.io托管个人博客

1. 先创建一个<github用户名字>.github.io 的仓库
2. 打开hexo博客目录下的_config.yml，使 type: git ,repo: <刚刚创建的仓库的链接>
3. 新建 "<博客目录>\scripts\auto_open.js"，JS上写以下内容可以让你在hexo n 时直接打开vscode编辑
```
var exec = require('child_process').exec;
    hexo.on('new', function(data){
    exec('start  "<vscode所在目录>" ' + data.path);
    }); 
```

## 三、更换博客主题
1. git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
> 克隆主题项目到 <博客目录>/themes/yilia
2. 打开hexo博客目录下的_config.yml，使theme: yilia
3. 生成网站发布

