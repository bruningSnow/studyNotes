/**
* 浏览器中的 JavaScript 是没有文件操作能力的
* 但是 Node 中的 JavaScript 具有文件操纵能力
* fs 是 file-system 的简写，是文件系统模块，其中具有相关文件操作的 API
* .writeFile 方法使用规则
* 第一个参数，字符串类型，表示写入文件地址
* 第二个参数，字符串类型，表示写入内容
* 第三个参数，对象类型，为读取结果回掉函数
* 成功：
*       error: null
* 失败：
*       error: 错误对象
*/

const fs = require('fs')

fs.writeFile('./toWrite.txt', '文件写入', function (error) {
	console.log('error =>', error)
})