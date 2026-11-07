
var countPrimes = function(n) {
    if(n<=0 || n===1) return 0
    let count = 0

    let prime = new Array(n+1).fill(true)

    for(let i = 2 ; i<=Math.sqrt(n);i++){

        if(prime[i]){

            for(let j = i*i ; j<=n ; j+=i){
                prime[j] = false;
            }
        }
    }

    for(let i = 2; i<n ; i++){
        if(prime[i]){
           count++
        }
    }
    return count
};