var http=require("http");
var fs=require("fs");


http.createServer(function(req,res)
{
res.writeHead(200,{Context_Type:"plain/html"});
res.write("hello");
res.end();
}).listen(8001);