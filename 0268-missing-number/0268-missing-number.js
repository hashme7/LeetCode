/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let hashMap = new Array(nums.length+1).fill(0);
    for(let i =0;i<nums.length;i++){
        hashMap[nums[i]]++;
    }
    for(let i = 1;i < hashMap.length;i++ ){
        if(hashMap[i]==0)return i;
    }
    return 0;
};