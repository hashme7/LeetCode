/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let n = nums.length ;
    let ans = [1];
    for(let i =1; i<n;i++){
        ans[i]=ans[i-1]*nums[i-1];
    }
    suffix =1;
    for(let i = n-1 ;i>=0 ;--i){
        ans[i]*=suffix;
        suffix *= nums[i];
    }
    return ans;
};