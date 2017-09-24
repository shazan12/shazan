const fs=require('fs');
data="hii,have you enjoyed"
writeStream = fs.createWriteStream("file3.txt");

writeStream.write(data);
writeStream.end();


writeStream.on("finish",function () 
{
		console.log("Finished writing")
	
	}
	);


writeStream.on("error",function (err) 
{
	if (err) 
	{
		console.log("error occured");
	}
else {
	console.log("error not occured");
	}
	});
		
	
	