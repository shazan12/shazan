const notes=require('./notes.js');
const yargs=require("yargs");

const argv = yargs.argv;

var command=argv._[0];

if (command=='add') 
{
	notes.addNote(argv.title,argv.body);
	}
	
else if (command=='list') 
{
	notes.getAll;
	}
	
	else if (command=='read')
	 {
	 	notes.getNote(argv.title);
	 	}
	 	
	 	else if (command=='remove') 
	 	{
	 		notes.removeNote(argv.title);
	 		}
	 		else {
					console.log('command not recognized');
					

	 			}
	 			
