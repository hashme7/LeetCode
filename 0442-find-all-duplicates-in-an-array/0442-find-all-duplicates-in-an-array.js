/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        console.log(index,Math.abs(nums[i]));
        if (nums[index] < 0) {
            console.log(index+1,"fkjasdfj;askdjfkajskdjfk")
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    console.log(nums)
    
    return result
};