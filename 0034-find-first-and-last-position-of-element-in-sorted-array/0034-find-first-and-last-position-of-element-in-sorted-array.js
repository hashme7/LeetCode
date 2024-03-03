/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let returnArray = [];
    for(let i =0 ; i< nums.length ; i++){
       if(nums[i]==target){
           returnArray.length==0?returnArray.push(i):returnArray[1]=i;
       }
    }
    if(!returnArray.length){
        return [-1,-1]
    }
    if(returnArray.length==1){
        returnArray.push(returnArray[0])
    }
    return returnArray;
};