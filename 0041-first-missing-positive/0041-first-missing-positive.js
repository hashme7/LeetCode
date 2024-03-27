/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let newArray = new Array(nums.length).fill(null);
    for(let i =0 ;i < nums.length;i++){
        if(nums[i]>0){
            newArray[nums[i]]=nums[i];
        }
    }
    for(let i =1;i<=newArray.length;i++){
        if(!newArray[i]){
            return i;
        }
    }
};