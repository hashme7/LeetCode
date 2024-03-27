/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let product = 1;
    let l =0;
    let ans = 0;
    for(let i =0;i<nums.length;i++){
        product *= nums[i];
        while(product>=k){
            product /= nums[l++];
        }
        ans += i-l+1;
    }
    return ans>0?ans:0;
};