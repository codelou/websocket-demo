// 导入express模块
var express = require('express')
// 创建一个express实例
var app = express();
// 创建一个websocket服务
var server = require('http').Server(app)
// 导入nodejs-websocket模块
const io = require('nodejs-websocket')

//  设定使用的静态资源路径 
app.use('/pages',express.static('pages'))
 
// 执行app的get请求处理 ，处理访问根目录下的请求
app.get('/', function (req, res) {
   res.send('Hello World');
})

// 执行app的get请求处理,处理访问news目录下的请求 
app.get('/news', function (req, res) {
   res.send('这是news版块页面');
   
})

// 执行app的get请求处理,处理访问ahout目录下的请求 
app.get('/about', function (req, res) {
   res.sendFile( __dirname+"/pages/" + "about.html" );
})

// 执行websocket处理连接方法
io.createServer(connection=>{
	console.log('new connection...')
	//处理客户端发送过来的消息	
	connection.on("text",function(data){
		console.log("接收到的客户端消息:"+data);
		connection.sendText("服务器端返回数据:"+data)
		
	//监听关闭
    connection.on("close", function (code, reason) {
        console.log("Connection closed")
    })
    //监听异常
	connection.on("error",() => {
		console.log('服务异常关闭...')
	})	
	})
}).listen(3000)


// 创建web服务，设定端口号和ip地址 
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})