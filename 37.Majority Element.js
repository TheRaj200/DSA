// 169. Majority Element
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.

var majorityElement = function(nums) {

    let count = [];
    let times = [];
    let res

    for (let i = 0; i < nums.length; i++) {

        if (!count.includes(nums[i])) {
            count.push(nums[i]);
            times.push(1);
        } else {
            let index = count.indexOf(nums[i]);
            times[index]++;
        }
    }
    for(let i = 0 ; i<times.length;i++){
        if(times[i]>nums.length/2){
            res = count[i]
        }
    }
    return res
};
