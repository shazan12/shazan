console.log('starting notes.js.....');

var addNote=(titl,body)=>{
console.log('Adding note',title,body);
};

var getAll=()=>{
console.log('Getting All notes');
};



var getNote=(title)=>{
console.log('Getting Note',title);

}


var removeNote=(title)=>{
console.log('RemoveNote',title);
}


module.exports={

addNote,
getAll,
getNote,
removeNote
};