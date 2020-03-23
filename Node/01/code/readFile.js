/**
* 浏览器中的 JavaScript 是没有文件操作能力的
* 但是 Node 中的 JavaScript 具有文件操纵能力
* fs 是 file-system 的简写，是文件系统模块，其中具有相关文件操作的 API
* .readFile 方法使用规则
* 第一个参数，字符串类型，表示读取文件路径
* 第二个参数，对象类型，为读取结果回掉函数
* 成功：
*       data: 读取对象
*       error: null
* 失败：
*       data: undefined
*       error: 错误对象
*/

const fs = require('fs')

fs.readFile('./helloWorld.js', function (error, data) {
	console.log('data =>', data)
	console.log('error =>', error)
})