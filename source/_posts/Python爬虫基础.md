---
title: Python爬虫基础
date: 2019-04-15 20:24:05
tags: python
---

## urllib库基础用法
---
#### 导入urllib库
` import urllib.request `
#### 将网页的内容赋值给data
` data = urllib.request.urlopen("https://read.douban.com/provider/all") `
#### 有时候需要把网页内容进行解码
` data = data.decode("utf-8") `

<!-- more -->

#### 后面可以加,"ignory"参数，表示遇到问题后无视
` data = data.decode("utf-8","ignory") `
#### 将网页爬到本地
` urllib.request.urlretrieve("https://read.douban.com/provider/all",C:\\Users\\DELL\\Desktop) `

#### 清楚缓存 
` urllib.request.urlcleanup() `
#### 获取当前网页状态码 
` data.getcode() ` 
#### 获取当前网页网址
` data.geturl() `
#### timeout 参数：加在urlopen后可以设置爬虫的响应最大时间
` data = urllib.request.urlopen("https://read.douban.com/provider/all",timeout = 3) `
#### 以get请求的方式爬取网页 
```
req = urllib.request.Request(url)
urllib.request.urlopen(req)
```
#### 对中文进行编码 
```
word = "测试"
word = urllib.request.quote(word)'
```
#### 表单请求
从网页源代码中找到表单信息，比如账号栏是name，密码栏是pass
```
mydata=urllib.parse.urlencode({"name":"test","pass":"1234"}).encode("utf-8")
req=urllib.request.Request(url,mydata) :通过请求的方式发送表单
data=urllib.request.urlopen(req).read() :获取网页信息
```
- - -
## 伪装浏览器

#### 将网址赋值给url 
`url = "https://blog.csdn.net/weixin_41167340/article/details/79778781" `
#### 找到在浏览器中的User-Agent
`header = ("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36")`
#### 使用build_opener
```
opener = urllib.request.build_opener()
opener.addheaders = [header]
```
#### 获取网页源代码 
`data = opener.open(url).read()`
#### 由于有时候需要伪装成不同的浏览器爬取网站，所以可以使用fake-useragent库
```
from fake_useragent import UserAgent
ua = UserAgent(verify_ssl=False)
print(ua.chrome)
print(ua.random)
```
里面有不同的浏览器的UserAgent

## 代理服务器
#### 在百度上搜索免费的代理IP地址和端口，使用代理服务器避免被网站封IP
```
import urllib.request

def use_proxy(url,ip):
    proxy = urllib.request.ProxyHandler({"http":ip})
    opener = urllib.request.build_opener(proxy,urllib.request.HTTPHandler)
    urllib.request.install_opener(opener)
    data = urllib.request.urlopen(url).read().decode("utf-8","ignory")

    return data
    
ip = "14.23.58.58:443"
url = "http://www.baidu.com"
data = use_proxy(url,ip)
```


## 常用异常处理
```
import urllib.error
try:
except urllib.error.URLError as e:
    if hasattr(e,"code"):
        print(e.code)
    if hasattr(e,"reason"):
        print(e.reason)
```