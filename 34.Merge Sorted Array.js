// Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a1 = [];
    let a2 = [];
    let res = [];
 
 arrylimit(a1,nums1,m)
 arrylimit(a2,nums2,n)

 function arrylimit(arr,val,t){
 for(let i = 0; i < t; i++){
        arr.push(val[i]);
    }
 }
    res = a1.concat(a2); 
    res.sort((a, b) => a - b);

    for(let i = 0; i < res.length; i++){
        nums1[i] = res[i];
    }
};