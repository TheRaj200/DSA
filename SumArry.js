var prompt = require('prompt-sync')();

let size = prompt('size of array : ');
let arr = [];
let sum = 0;

for(let i = 0 ; i<size; i++){
   arr[i] = prompt('element of '+ i + ": ")
}

for(let i = 0 ; i<size;i++){
   sum +=  Number(arr[i])
}

console.log(sum)