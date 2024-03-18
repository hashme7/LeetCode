/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i =nums.length ;i>=0 ;i--){
        if(nums[i]<target){
            return i+1;
        }
    }
    return 0;
};