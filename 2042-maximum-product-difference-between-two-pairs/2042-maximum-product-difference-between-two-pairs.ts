function maxProductDifference(nums: number[]): number {
    let mx1: number =0 ,mx2: number =0, sm1: number = 10000000, sm2: number = 1000000;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]<sm1){
            sm2 = sm1;
            sm1 = nums[i];
        }else if(nums[i]>=sm1 && nums[i]<sm2){
            sm2 = nums[i]
        }
        if(nums[i]>mx1){
            mx2 = mx1;
            mx1 = nums[i];
        }else if(nums[i]<=mx1 && nums[i]>mx2){
            mx2 = nums[i]
        }
    }
    return Number((mx1*mx2) - (sm1* sm2) );
};