function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let result = []
    let hash = {}
    for (let i = 0; i < nums1.length; i++) {
        if ((nums2.includes(nums1[i]) || nums3.includes(nums1[i]) )&& !hash[nums1[i]]) {
            result.push(nums1[i])
            hash[nums1[i]] = 1;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if ((nums1.includes(nums2[i]) || nums3.includes(nums2[i])) && !hash[nums2[i]]) {
            result.push(nums2[i])
            hash[nums2[i]] = 1;
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        if ((nums2.includes(nums3[i]) || nums1.includes(nums3[i])) && !hash[nums3[i]]) {
            result.push(nums3[i])
            hash[nums3[i]] = 1;
        }
    }
    return result
};