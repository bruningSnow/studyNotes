const http = require('http')

const server = http.createServer()

server.on('request', function (request, response) {
	console.log('收到处理请求')
	/**
	* response 对象有个一个方法：write 可以用啦来给客户端发送响应数据
	* write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
	* response.write('hello ')
	* response.write('world!')
	* response.end()
	* 这种做法极为繁琐，一般使用 response.end(data)
	* data 响应内容只能是二进制或者字符串
	* 注意：其他数据类型需要进行数据字符串是化
	*/
	const data = [
		{
			name: '小西瓜',
			count: 4
		},
		{
			name: '小菠萝',
			count: 2
		},
		{
			name: '小草莓',
			count: 3
		}
	]
	response.setHeader('Content-Type', 'text/plain; charset=utf-8')
	response.end(JSON.stringify(data))
})
server.listen('8080', function () {
	console.log('服务器启动成功，可以通过 http:127.0.0.1:8080/')
})