var exp=require("express");
var app=exp();
app.listen(10000,function(){console.log("we are at server 10000")});
app.get("/hello",function(req,res){
	res.send("<h1>Welcome to Web App<h1>");
})