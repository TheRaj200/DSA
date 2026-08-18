let arr =[1,27,4,53,5,6,2,3,7]
let target= 7;
let index = -1;

for(let i = 0 ; i<arr.length;i++){
    if(arr[i]== target){
        index = i
        break
    }
}
console.log(index==-1? "element not found": "ye raha "+index +" ess index par" )