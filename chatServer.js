// 聊天室服务端
var express=require('express')
var app=express()
var http=require('http').Server(app)
app.use('/',express.static('static'))
var io = require('socket.io')(http);//引入socket.io模块并绑定到服务器
app.get('/',function (req,res){
  res.sendFile(__dirname+'/static/client.html')
})
io.on('connection', function(socket){
  console.log('a user connected');


  socket.on('chat message', function(msg){
    console.log(msg)
     io.emit('chat message', msg);
  });

  socket.on('disconnect',function(){
    console.log('a user gone')
    })
    
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});


