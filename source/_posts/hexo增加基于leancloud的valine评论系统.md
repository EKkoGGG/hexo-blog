---
title: hexo增加基于leancloud的valine评论系统
date: 2019-03-07 22:50:44
tags: hexo
---

![2019-03-07-23-27-15](http://ww1.sinaimg.cn/large/79aa5f26gy1g1yycr102ij20p00fywfq.jpg)

一、Leancloud
===
1. 注册Leancloud
2. 创建存储应用
3. 获取APPID和APPKEY

<!-- more -->
二、配置
===
```
// 主题\_config.yml

#6、Valine https://valine.js.org
valine: 
 appid:  #Leancloud应用的appId
 appkey:  #Leancloud应用的appKey
 verify: false #验证码
 notify: false #评论回复提醒
 avatar: mm #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 placeholder: Just go go #评论框占位符

```

```
//layout/_partial/article.ejs,放到<% if (!index && post.comments下
<% if (theme.valine && theme.valine.appid && theme.valine.appkey){ %>
    <section id="comments" class="comments">
      <style>
        .comments{margin:30px;padding:10px;background:#fff}
        @media screen and (max-width:800px){.comments{margin:auto;padding:10px;background:#fff}}
      </style>
      <%- partial('post/valine', {
        key: post.slug,
        title: post.title,
        url: config.url+url_for(post.path)
        }) %>
  </section>
<% } %>

```

```
// layout/_partial/post/valine.ejs

<div id="vcomment" class="comment"></div> 
<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<script src="//unpkg.com/valine/dist/Valine.min.js"></script>
<script>
   var notify = '<%= theme.valine.notify %>' == true ? true : false;
   var verify = '<%= theme.valine.verify %>' == true ? true : false;
    window.onload = function() {
        new Valine({
            el: '.comment',
            notify: notify,
            verify: verify,
            app_id: "<%= theme.valine.appid %>",
            app_key: "<%= theme.valine.appkey %>",
            placeholder: "<%= theme.valine.placeholder %>",
            avatar:"<%= theme.valine.avatar %>"
        });
    }
</script>
```
