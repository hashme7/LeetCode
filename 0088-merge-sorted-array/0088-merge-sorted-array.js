/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k =0;
    for(let i =0 ; i< nums1.length ;i++){
       if(nums1[i]==0 && k<n){
            nums1[i] = nums2[k];
            k++;
       } 
    }
    for(let i =0 ; i< n+m;i++){
        let j = i-1;
        let key = nums1[i];
        while(key<nums1[j]){
            let temp = nums1[j+1];
            nums1[j+1] = nums1[j];
            nums1[j] = temp;
            j--
        }
    }
    return nums1;
};