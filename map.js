// Two Sum
// Return the indices of two numbers that add up to target.
var twoSum = function(nums, target) {
    const index = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (index.has(complement)) {
            return [index.get(complement), i];
        }

        index.set(nums[i], i);
    }
};