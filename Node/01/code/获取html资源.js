const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', function(req, res) {
    fs.readFile('./resoure/resource.html', function(err, data) {
        if(err) {
            res.setHeader('Content-type', 'text/plain; chartset=utf-8')
            res.end('文件读取失败')
        } else {
            res.setHeader('Content-type', 'text/html; chartset=utf-8')
            res.end(data)
        }
    })
})

server.listen('8080', function () {
	console.log('服务器启动成功，可以通过 http:127.0.0.1:8080/')
})