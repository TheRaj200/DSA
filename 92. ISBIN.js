let Isbin = 1234567891;

let temp = Isbin;
let sum = 0;
let count = 0;
let weight = 1;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit * weight;

  temp = Math.floor(temp / 10);
  count++;
  weight++;
}

if (count !== 10) {
  console.log("ISBN nahi hai");
} else if (sum % 11 === 0) {
  console.log("ISBN hai");
} else {
  console.log("ISBN nahi hai");
}