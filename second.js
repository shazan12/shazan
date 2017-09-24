var c= "global";
function shazan(){
	const a = "Local";

	 console.log(a)
var i;
for (i=0;i<5;i++)
{
console.log(i)

		let b ="blockscope";
		console.log(b)
}


console.log(c)
}
shazan();


