// print the character how many time occors in the string

let s = "hello";
let freq = new Array(123).fill(0);
let index = [];

for (let i = 0; i < s.length; i++) {
  let ascii = s.charCodeAt(i);
  freq[ascii] = freq[ascii] + 1;

  if(freq[ascii] == 1){
    index.push(ascii)
  }
}

for (let i = 0; i < index.length; i++) {
console.log(String.fromCharCode(index[i])+ " -> "+ freq[index[i]])
}
