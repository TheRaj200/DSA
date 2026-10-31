// function count(n){
//   if(n==0) return
//   console.log(n)
//   count(n-1)
// }


// count(10

// function count(n){
//   if(n>10) return
//   console.log(n)
//   count(n+1)
// }


// count(0)

// sum using recursion

function addf(n){
  if(n==1) return n
 return n + addf(n-1)
}
let res = addf(3)
console.log(res)

