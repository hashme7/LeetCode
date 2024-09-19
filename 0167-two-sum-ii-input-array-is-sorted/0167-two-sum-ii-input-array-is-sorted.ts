function twoSum(numbers: number[], target: number): number[] {
    let end = numbers.length-1;
    let hash = new Map();
    for(let i =0 ;i< numbers.length;i++){
        let balance = target-numbers[i];
        if(hash.has(balance)){
            return [hash.get(balance)+1,i+1]
        }
        hash.set(numbers[i],i);
    }
};