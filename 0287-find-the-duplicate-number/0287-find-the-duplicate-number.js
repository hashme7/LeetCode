/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newNums ={};
    for(let i =0 ;i<nums.length;i++){
        if(newNums[nums[i]]){
            console.log('000000000')
            newNums[nums[i]] = newNums[nums[i]]+1;
        } else{
            newNums[nums[i]] = 1;
        }
    }
    console.log(newNums)
    for(let i =1;i<nums.length;i++){
        console.log(newNums[nums[i]]);
        if(newNums[nums[i]]>=2)return nums[i];
    }
};
