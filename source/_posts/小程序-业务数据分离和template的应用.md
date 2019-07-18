---
title: 小程序-业务数据分离和template的应用
date: 2019-04-22 21:27:20
tags: 小程序
---

![](http://ww1.sinaimg.cn/large/79aa5f26ly1g2br94u1aej20p00e3wig.jpg)

### 业务数据分离
- 新建一个JS页面存放变量数值
```
<!-- 数值形式 -->
var local_database = [{
    date: 'NOV 18 2019',
    title: '正是虾肥蟹壮时',
    post_image: '/images/post/crab.png',
  }
]
```
- 给脚本文件定义出口
> module.exports = {
>  postList : local_database
> }
- 在调用的JS页面使用`require`命令获取数据数组
> var postsData = require('../../data/posts-data.js')
> JS中的onLoad方法中，发送数据都data `this.setData({posts_key:postsData.postList})`
<!-- more -->
### template模板的应用

**template模板：为了复用`wxml`和`wxss`而使用的模板标签**

- 新建一个页面存放复用内容，使用"<"template> 标签
```
<template name="postItem"> // name 不能漏
 ... // 复用内容
</template>
```
- 在调用的wxml引用template模板
> "<"import src = "post-item/post-item-template.wxml" />
- 在复用位置使用模板，示例为列表渲染文章
```
<block wx:key='1' wx:for ='{{posts_key}}' wx:for-item = 'item'>
  // 列表渲染中子项item要当作数据传入模板  
  <template is = "postItem" data = "{{item}}" /> 
</block>
```