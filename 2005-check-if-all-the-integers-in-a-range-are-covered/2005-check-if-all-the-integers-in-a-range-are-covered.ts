function isCovered(ranges: number[][], left: number, right: number): boolean {
    let set = new Set();
    for (let i = 0; i < ranges.length; i++) {
        for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
            set.add(j);
        }
    }
    for (let i = left; i <= right; i++) {
        if (!set.has(i)) {
            return false;
        }else{
            set.delete(i);
        }
    }
    return true;

};