const bodyparser=require('body-parser');
var express =require('express');
var app =express()
var mysql=require('mysql');


var conn=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"expressdb"
});

conn.connect(function(err){
	if(err){
		console.log(err);
	}
});

app.get('/query',function(req,res){
	conn.query("select * from users",function(err,result){
		res.send("err=:"+err+"result: "+result[0].username);
	});

});




var urlencoder=bodyparser.urlencoded({extended:false});



app.route('/second')
	.get(function(req,res){
			res.render(__dirname +'/view/second.ejs');
})
		.post(urlencoder,function(req,res)
	
{
	res.send(req.body);
});



// app.post('/second',urlencoder,function(req,res){
// 	res.send(req.body);
// });




app.set('view engine','ejs');
app.get('/',function(req,res){
	res.sendFile(__dirname+'/view/mid.html');
});
app.listen(5000,function(){
	console.log("app is working on port no 5000");
});
app.get('/about',function(req,res){

	res.sendFile(__dirname +'/view/about.html');
});



// app.get('/second',function(req,res){

// 	res.render(__dirname +'/view/second.ejs');
// });


app.get('/profile/:id',function(req,res){

	res.send('you have requested ID:'+ req.params.id);
	console.log(req.params.id)
});


app.get('/login/:id/:username',function(req,res,next){

	if(req.params.id==2)
	{
		next();
	}
	else{
		res.send("Unauthorized access");
	}
},
function(req,res,next){

	if(req.params.username=='shazan')
	{
		next();
	}
	else{
		res.send("incorrect username");
	}
},
function(req,res){

	res.send("acces granted");
});