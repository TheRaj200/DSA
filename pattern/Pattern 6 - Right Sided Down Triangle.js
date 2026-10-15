let n=5;
for(let i=0;i<n;i++){
    let s = "";
     for(let k =1;k<=i;k++){
       s+= " ";
     }
    let str="";
    for(let j=1;j<=n-i;j++){
        str+=j;
    }
    console.log(s+str)
}