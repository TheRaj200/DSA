var prompt = require('prompt-sync')();

let size = prompt("enter how many starts you want : ");

for(let i = 0 ; i<size;i++){
    let str = "";
    
    for(let j = 0 ; j<size;j++){
        str+= "*" ;
    }
    console.log(str)
}
