/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newNums ={};
    for(let i = 0;i<nums.length;i++){
        if(newNums[nums[i]]){
            return nums[i]
        }else{
            newNums[nums[i]]=1;
        }
    }
};
