mobile={
		model:"3s prime",
		manufacturer: "redmi",
		volumeup:function(i){
					
			console.log("i= "+i);
			return 0;
		
		},
		volumedown:function () {

				console.log("--");
					return 0;
		}
}


					
					
console.log(mobile.model);
console.log(mobile.manufacturer);
console.log(mobile.volumeup(10));
mobile["name"]="xyz";
console.log(mobile.name);