var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
 
   console.log("The request object", request);
   console.log("The response object", response);
   response.render("index.html")
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/lorenzo", function (request,response){
    var food="discarded chinese take-out"
    var name="Lorenzo";
    var age = "6";
    var sleeping_spots=["Under the couch", "on the porch during sunrise", "owners face"];
    var image_source="images/cat1.jpg";
    response.render("details",{
        cat_name:name,
        cat_age:age,
        spots:sleeping_spots,
        img:image_source,
        fav_food:food
    });
})

app.get("/marcelo", function (request,response){
    var food="Fancy Feast"
    var name="Marcelo";
    var age = "8";
    var sleeping_spots=["top of the scratching post", "any box", "kitchen counter"];
    var image_source="images/cat2.jpg";
    response.render("details",{
        cat_name:name,
        cat_age:age,
        spots:sleeping_spots,
        img:image_source,
        fav_food:food
    });
})

app.get("/nicolette", function (request,response){
    var food="rodents left under the sun"
    var name="Nicolette";
    var age = "7";
    var sleeping_spots=["under any lamp", "owners lap", "under a car"];
    var image_source="images/cat3.jpg";
    response.render("details",{
        cat_name:name,
        cat_age:age,
        spots:sleeping_spots,
        img:image_source,
        fav_food:food
    });
})

