/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let c = 1;
    let target = nums[0] + nums[1];
    for(let i =2 ; i+1 < nums.length ; i +=2){
        if(nums[i] + nums[i+1] == target){
            c++ ;
        }else{
break;
        }
    }
    return c;
};