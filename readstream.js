const fs=require('fs');
data="";
readStream = fs.createReadStream("file.txt");


readStream.on ("data",function (chunk) 
{ 
data+=chunk;
}	
);

readStream.on ("end", function ()
{
console.log(data)
} );

readStream.on ("err",function (err) 
{
	
if (err) 
{
	console.log("erroe occured");
	}
	else {
		console.log("error not occured");
		} 
		});