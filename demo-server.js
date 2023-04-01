/* 引入模块 */ 
var http = require('http')
var port = 3000

/* 创建web服务  */
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('hello world')
})

/* 监听方法 */
server.listen(port, function() {
    console.log('我的nodejs服务启动了，地址为127.0.0.1:'+port)
})