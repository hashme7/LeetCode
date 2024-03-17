/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    for(let i =0 ; i< nums.length ;i++){
        if(nums[i]==0){
            nums[i]=-1;
        }
    }
    let sum =0;
    let newMap = {};
    let output = 0;
    for(let i =0;i< nums.length; i++){
        console.log(nums[i])
        sum +=nums[i];
        if(sum == 0){
            output = Math.max(output,i+1);
        }
        if(sum in newMap){
            output = Math.max(output,i-newMap[sum]);
        }else{
            newMap[sum] = i;
        }
        
    }
    return output
};