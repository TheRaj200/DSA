
function sumUpToN(n) {
    let sum = 0
    for(let i = 1; i<=n;i++){
        sum = sum+i
    }
return sum
}

module.exports = { sumUpToN };