let arr = [2,4,6,3,8];
let k =2 ;


for(let i = 0 ; i<k;i++){
    let f = arr[0];

for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1]
}
arr[arr.length - 1] = f
}

console.log(arr)