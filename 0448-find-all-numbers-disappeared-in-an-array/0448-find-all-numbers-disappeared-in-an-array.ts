function findDisappearedNumbers(nums: number[]): number[] {
    let set = new Set(nums), result = [];
    for(let i = 1;i<=nums.length;i++){
        if(!set.has(i)){
            result.push(i);
        }
    }
    return result
};