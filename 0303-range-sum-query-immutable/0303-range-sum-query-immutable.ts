class NumArray {
    numArray=[];
    constructor(nums: number[]) {
        this.numArray = new Array(nums).flat();
    }

    sumRange(left: number, right: number): number {
        let sum:number = this.numArray[left];
        for(let i = left+1;i<=right;i++){
            sum+=this.numArray[i];
        }
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */