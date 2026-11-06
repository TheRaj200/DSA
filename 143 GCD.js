//First method = O(min(a,b))

// let a = 20
// let b = 36
// let n = Math.min(a,b)

//  function gcd (a,b,n){

//    if(n==1) return 1
//    if(n==0) return 0
//    if(a%n==0 && b%n==0) return n
//    return gcd(a,b,n-1)
   
//  }

// console.log(gcd(a,b,n))

// second method = O(max(a,b))


// let a = 48
// let b = 27


//  function gcd (a,b){
//    if(a==0) return 0
//    if(a===b) return a

//    if(a<b){
//        b=b-a
//    }else{
//      a=a-b
//    }
//    return gcd(a,b)
   
//  }

// console.log(gcd(a,b))

//third method log(min(a,b))


  let a = 10
  let b = 13

 function gcd (a,b){
   if(b==0) return a
   console.log(a,b)

   return gcd(b,b%a)
   
 }

console.log(gcd(a,b))

