let arr1 = [2, 4, 7, 9]
let arr2 = [1 ,3 ,8 ,10 ,15]
let tem = new Array(arr1.length+arr2.length)


let i=0,j=0,k=0;

while(i<arr1.length  &&  i<arr2.length){
    if(arr1[i]<arr2[j]) tem[k++] = arr1[i++]
    else tem[k++]= arr2[j++]
}

while(i<arr1.length) tem[k++] = arr1[i++]
while(j<arr2.length) tem[k++] = arr2[j++]

console.log(tem)

