function factorial(n) {
if(n==0) return console.log(1)
let fact = 1;
for(let i = 1; i<=n;i++){
    fact = i*fact;
}
console.log(fact)
}
module.exports = { factorial };