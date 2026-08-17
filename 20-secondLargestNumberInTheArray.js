let arr = [23, 34, 53,12 ,55 ,80,76];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for(let i = 2 ; i<arr.length ; i++){
    
    if(arr[i]> max){
        smax = max;
        max = arr[i];
    }else if(arr[i]>smax && arr[i]!=max){
        smax= arr[i];
    }
}
console.log(smax)