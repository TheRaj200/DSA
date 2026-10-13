let arr= [3,4,5,-1,-6,4,7,-8];
let i = 0 ;
let j = arr.length-1;


while(i<j){
    if(arr[i]>0){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        j--
    } else {
        i++
    }
}

console.log(arr)