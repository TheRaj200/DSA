var prompt = require('prompt-sync')();

let size = prompt("enter how many starts you want : ");
let str = "";

for(let i = 1 ; i<size;i++){
    str+= "*" ;
}

console.log(str)