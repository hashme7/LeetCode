/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let sum =0,count =0;
    for(let i =0 ;i< nums.length ;i++){
        sum=sum + nums[i];
        if(sum == 0)count++;
    }
    return count;
};