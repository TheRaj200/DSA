for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 4 - i; j++) {
    str = str + " ";
  }
  for (let r = 0; r <= i; r++) {
    str += "*";
  }
  console.log(str);
}
