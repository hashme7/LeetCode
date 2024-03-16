/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let tot =0;
    for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
        tot += nums[i];
    }
}

return tot;
};