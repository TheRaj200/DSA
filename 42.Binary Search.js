let arr = [1,2,4,6,8,33,76,434];

let ans = binary(arr,33)
if( ans ===-1) console.log("nhi mila ")
    else console.log("mil gya ess index par hai array ke "+ans)

function binary(arr,target){
    let s = 0 
    let e = arr.length-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] === target) return mid
        else if(arr[mid]>target) e = mid-1
        else s = mid+1
        
    }
    return -1
}