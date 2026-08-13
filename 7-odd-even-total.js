let number = 10;

let even = 0;
let odd = 0;

for(let i = 1 ; i<=number ; i++ ){
    if(i%2==0){
        even = even+i;
    } else{
       odd = odd+i;
    }

}
console.log("Total number even : "+ even + " and odd is : " + odd)