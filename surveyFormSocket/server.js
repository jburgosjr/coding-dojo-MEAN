var express = require('express');


var app = express();
var server = app.listen(8000);

app.use(express.static(__dirname + '/static'));


app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

var io = require('socket.io')(server);
io.on("connection",function(socket) {
    console.log("someone connected");
    socket.on('userInfo', function(data) {
        console.log(data);
        var rand = Math.floor(Math.random()*1000+1);
        socket.emit("info",{msg:`you emitted the following information... ${data.location}... your lucky number emited by the server is: ${rand}`});
    });
});

app.get('/', function(request, response) {
response.render('index')
})

app.post('/info', function(req, res) {
   res.redirect('/'); 
});