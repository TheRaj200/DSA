let val = 'abba'

let i = 0 , j= val.length-1
let isPal = true
while(i<j){
    if(val[i]!==val[j]){
       isPal = false
       break
    }
    i++
    j--
}

if(isPal == true){
    console.log("pallindrome hai ye "+ val)
} else{
    console.log("pallindrome nhi hai ye "+ val)

}