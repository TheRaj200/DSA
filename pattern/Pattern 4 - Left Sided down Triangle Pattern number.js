var prompt = require('prompt-sync')();

let size = prompt("enter how many starts you want : ");

for(let i = size ; i>0;i--){
    let str = "";   
    for(let j = 1 ; j<i;j++){
        str+= j ;
    }
    console.log(str)
}
