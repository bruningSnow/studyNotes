# Node.js

## Node.js 介绍

### 1.1. 为什么要学习 Node.js

- 企业需求
  + 具有服务端开发经验更好
  + front-end （前端）
  + back-end （后端）
  + 全栈开发工程师
    * 全干
  + 基本的网站开发能力
    * 服务端
    * 前端
    * 运维部署
  + 多人社区

### 1.2. Node.js 是什么

+ Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

  + Node.js 不是一门语言
  + Node.js 不是库、不是框架
  + Node.js 是一个JavaScript 运行时环境
  + 简单来说就是 Node.js 可以解析和执行JavaScript 代码
  + 以前只有浏览器可以解析执行 JavaScript 代码
  + 也就是说现在的 JavaScript 可以完全脱离浏览器来运行，一切都归功于：Node.js

+ 浏览器中的 JavaScript

  * ECMAScript
  * BOM
  * DOM

+ Node.js 中的 JavaScript

  * **没有 BOM、DOM**

  * ECMAScript
  * 在 Node 这个 JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作 API
    - 例如文件读写
    - 网络服务的构建
    - 网络通信
    - http 服务器
    - 等处理。。。

+ 构建于 Chrome 的 V8 引擎之上

  * 代码只是具有特定格式的字符串而已
  * 引擎可以认识它，引擎可以帮助你去解析和执行
  * Google Chorome 的 V8 引擎是目前公认的解析执行 JavaScript 代码最快的
  * Node.js 的作者把 Google Chorome 的 V8 引擎移植了出来，开发了一个独立的 JavaScript 运行时环境

+ Node.js uses an event-driven,non-blocking I/O model that makes it lightweight and efficient.

  + event-driven 事件驱动
  + non-blocking I/O model 非阻塞 I/O 模型 （异步）
  + lightweight and efficient 轻量和高效
  + 随着课程慢慢的学习你会明白什么是事件驱动、非阻塞 I/O 模型

+ Node.js' package ecosystem, [npm](https://www.npmjs.com/package/npm), is the largest ecosystem of open source libraries in the world.

  * npm 是世界上最大的开源库生态系统
  * 绝大多数 JavaScript 相关的包都存放在 npm 上，这样做的目的是为了开发人员更方便的去下载使用
  * `npm install`

### 1.3. Node.js 能做什么

+ Web 服务器后台
+ 命令行工具
  * npm (node)
  * git (c 语言)
  * hexo(node)
  * 。。。
+ 接口服务器
+ 对于前端开发工程师来讲，接触 node 最多的是它的命令行工具
  * 自己写的很少，主要是使用别人第三方
  * webpack
  * gulp
  * npm

### 1.4. 预备知识

+ HTML
+ CSS
+ JavaScript
+ 简单的命令行操作
  * cd
  * dir
  * ls
  * mkdir
  * rm
+ 具有服务端开发经验更佳

### 1.5. 一些资源

* 《深入浅出Node.js》
  * 偏理论，几乎没有任何实战内容
  * 理解原理底层有帮助
  * 结合课程的学习去看
* 《Node.js 权威指南》
  * API 讲解
  * 没有业务，没有实战
* JavaScript 标准参考教程 （alpha）: http://javascript.ruanyifeng.com/
* Node 入门：https://www.nodebeginner.org/index-zh-cn.html/
* 官方 API 文档：https://nodejs.org/
* 中文文档：https://www.nodeclass.com/
* CNODE 社区：http://cnodejs.org
* CNODE 新手入门：http://cnodejs.org/getstart

### 1.6. 这门课你能学到啥？

* B/S 编程模型

  * Browser - Server
  * back - end
  * 任何服务端技术这种 BS 编程模型都是一样，和语言无关
  * Ndoe 只是作为我们学习 BS 编程模型的一个工具而已

* 模块化编程

* Node 常用 API

* 异步编程

  * 回调函数
  * async
  * generator

* Express 开发框架

* ECMAScript 6

* 学习 Node 不仅会帮助大家打开服务端黑盒子，同时也会帮助你学习以后的前端高级内容

  * Vue.js
  * React.js
  * Angular.js

* 。。。

  

## 2. 起步

###  2.1. 安装 Node 环境

* 查看当前 Node 环境的版本号
* 下载：https://nodejs.org/en/download/
* 安装
* 确认 Node 环境是否安装成功（`node --version`）
* 环境变量

### 2.2. Hello World

* 解析执行 JavaScript
* 读写文件
* http

## 3. Node 中的 JavaScript

最简单的 http 服务：

``` javascript
/**
* 接下来，我们要干一件使用 Node 很有成就感的一件事儿
* 你可以使用 Node 非常轻松的构建一个 Web 服务器
* 在 Node 中专门提供了一个核心模块：http
* http 这个模块的职责就是帮你创建服务器的
* 
* 1. 加载 http 核心模块
* 2. 使用 http.createServer() 方法创建一个 Web 服务器
*    返回一个 Server 实例
* 3. 服务器要干嘛？
* 提供服务：对数据的服务
* 发请求
* 接受请求
* 处理请求
* 发送响应
* 当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
* 4. 绑定端口号（只要不被占用就好），启动服务器
*/

// 1
const http = require('http')

// 2
const server = http.createServer()

// 3
server.on('request', function () {
	console.log('收到处理请求')
    // 因为请求没有给客户端任何反馈，随意浏览器客户端一直为等待状态
})

// 4
server.listen('8080', function() {
	console.log('服务器启动成功，可以通过 http:127.0.0.1:8080/')
})
```



![image-20200322143349608](C:\Users\燃情雪\AppData\Roaming\Typora\typora-user-images\image-20200322143349608.png)

### 3.1. ECMAScript

* 没有 DOM，BOM

###  3.2. 核心模块

* Node 为 JavaScript 提供了很多服务器级别 API ，这些 API 绝大多数都被包装到了一个具名的核心模块中

* 使用模块就必须先进行模块引入操作`require`方法加载

  ```javascript
  const fs = require('fs')
  const http = require('http')
  ```

  

### 3.3. 第三方模块

* require
* exports（每个文件模块都有一个默认 exports 对象，开始值为空对象 {}）
* node 没有全局作用域，只有模块作用域

### 3.4. 用户自定义模块



## 4. Web 服务器开发

### 4.1. ip 地址和端口号

* ip 地址用来定位计算机

* 端口号用来定位具体的应用程序

* 一切需要联网通信的软件都会占用一个端口号

* 端口号范围从 0 ~ 65536 之间

* 在计算机中的一些默认端口号，最好不要去使用

  * 例如 http 服务的 80

* 我们在开发过程中使用一些简单好记的就可以了，例如 3000、5000等没有什么特殊含义的

* 可以同时开启多个服务，但是一定要确保不同服务之间占用的端口号不一致从可以

* 说白了，在一台计算机中，同一端口号同一时间只能被一个程序占用


### 4.2. Content-type

* [Content-type 资源类型配对](http://tool.oschina.net/commons)
* 图片/html/text/js等资源类型不同 Content-type 也不同
* 对于文本类型的数据，最好加上编码，避免中文乱码现象
* 举例：`res.setHeader('Content-type', 'text/plain; chartset=utf-8')`

## 5. 留言本



## 6. Node 中的模块系统





