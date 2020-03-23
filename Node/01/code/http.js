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
})

// 4
server.listen('8080', function() {
	console.log('服务器启动成功，可以通过 http:127.0.0.1:8080/')
})