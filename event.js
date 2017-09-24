var event=require("events");

var em1 = new event.EventEmitter();
var em2 = new event.EventEmitter();
var em3 = new event.EventEmitter();




em1.on("occur",function(){
console.log("occur")})
em2.on("disappear",function(){
console.log("disappear")}	)
em3.on("delay",function (){
console.log("delay")} )


em1.emit("occur");
em2.emit("disappear");
em3.emit("delay");