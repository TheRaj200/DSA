// print the character how many time occors in the string 

let s = "hello"
let freq = new Array(123).fill(0);

for(let i = 0;i<s.length;i++){
    
    let ascii = s.charCodeAt(i);

    freq[ascii] = freq[ascii]+1;

}

for(let i =0 ;i<freq.length;i++){
    if(freq[i]>0){
        console.log(String.fromCharCode(i)+"->"+freq[i]);
    }
}

