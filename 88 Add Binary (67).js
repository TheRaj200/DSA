// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
    let i = a.length-1;
    let j = b.length-1;
    let carray = 0;
    let res ="";

    while(i>=0||j>=0||carray>0){
        let x = i>=0 ? Number(a[i]) : 0 ;
        let y = j>=0 ? Number(b[j]) : 0 ;

        let sum = x+y+carray;

        res= (sum%2)+res;
        carray= Math.floor(sum/2)

        i--;
        j--;

    }

    return res;
    
    
};