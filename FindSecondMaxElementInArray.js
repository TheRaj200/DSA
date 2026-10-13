let arr = [2, 3, 45, 6,8];
let max = arr[0];
let smax = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i]>smax && arr[i]<max){
     smax = arr[i]
  }
}

console.log(smax);
