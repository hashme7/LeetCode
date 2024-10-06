function findDisappearedNumbers(nums: number[]): number[] {
    let hash = {};
    let result = []
    for(let i = 0 ;i< nums.length;i++){
        hash[nums[i]] =1; 
    }
    for(let i =1 ;i<=nums.length;i++){
        if(!hash[i]){
            result.push(i)
        }
    }
    return result;
};