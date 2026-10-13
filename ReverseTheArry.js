// let arr = [6,4,7,3,5,73,3];
// let rev = [];


// for(let i = arr.length-1 ; i>0 ;i--){
//     rev.push(arr[i])

// }

// console.log(rev);

let arr = [6,4,7,3,5,73,3];
let i = 0;
let j = arr.length-1;


while(i<j){
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem

    i++
    j--

}

console.log(arr);