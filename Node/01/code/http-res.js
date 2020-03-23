const http = require('http')

const server = http.createServer()

/**
* request 请求事件处理函数，需要接收两个参数
* Request 请求对象
* 请求对象可以用来获取客户端的一些请求信息，例如请求路径
* Response 响应对象
* 响应对象可以用来给客户端发送相应请求
*/
server.on('request', function (request, response) {
	console.log('收到处理请求')
	/**
	* response 对象有个一个方法：write 可以用啦来给客户端发送响应数据
	* write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
	*/
	response.write('hello ')
	response.write('world!')
	response.end()
})
server.listen('8080', function() {
	console.log('服务器启动成功，可以通过 http:127.0.0.1:8080/')
})