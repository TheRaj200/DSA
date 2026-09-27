// 709 : Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"

var toLowerCase = function(s) {
    let str = "";

    for(let i = 0 ; i<s.length;i++){
        let word = s.charCodeAt(i)
        if(word>=65 && word<=90){
            str +=  String.fromCharCode(word+32);
        }else {
            str += String.fromCharCode(word);
        }
    }

    }
    return str;