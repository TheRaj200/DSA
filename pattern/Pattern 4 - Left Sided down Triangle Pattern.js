var prompt = require('prompt-sync')();

let size = prompt("enter how many starts you want : ");

for(let i = size ; i>0;i--){
    let str = "";   
    for(let j = 0 ; j<i;j++){
        str+= "*" ;
    }
    console.log(str)
}
