let s1 = "data";
let s2 = "ttaa";
let freq = new Array(123).fill(0);
let isanagram = true;

if (s1.length != s2.length) {
  isanagram = false;
}

for (let i = 0; i < s1.length; i++) {
  let ascii = s1.charCodeAt(i);
  freq[ascii] = freq[ascii] + 1;
}
for (let i = 0; i < s2.length; i++) {
  let ascii = s2.charCodeAt(i);
  freq[ascii] = freq[ascii] - 1;
}

for (let i = 0; i < freq.length; i++) {
  if (freq[i] != 0) {
    isanagram = false;
    break;
  }
}

isanagram? console.log("hai") : console.log("nhi hai");
