let a = 20
let b = 36
let n = Math.min(a,b)

 function gcd (a,b,n){

   if(n==0) return 0

   if(a%n==0 && b%n==0) return n


   return gcd(a,b,n-1)
   
 }

console.log(gcd(a,b,n))