var express = require('express');
var path = require('path');

var app = express();

app.listen(8000);



app.use(express.static( __dirname + '/public/dist/public' ));


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

