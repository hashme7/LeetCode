/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    for(let i =0 ;i< nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]]=1;
        }else{
            hash[nums[i]]++;
        }
    }
    let mid = nums.length/2;
    let output ;
    for(let key in hash){
        console.log(hash[key])
        if(hash[key]>mid){
            output = key;
        }
    }
    return output
};