let s = "asgASD"

let ans = "";

for(let i = 0 ; i < s.length; i++){
    let val = s.charCodeAt(i)
    if(val >= 65 && val<=90){
        ans = ans + String.fromCharCode(val+32)
    } 
    else if(val >= 97 && val<=122){
        ans = ans + String.fromCharCode(val-32)
    }
    

}
console.log(ans)