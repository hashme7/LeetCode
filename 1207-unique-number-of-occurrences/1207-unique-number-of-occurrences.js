/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let unique = {};
    for(const num of arr){
        unique[num] = (unique[num]||0)+1;
    }
    const uniqueElements = new Set(Object.values(unique));
    console.log(uniqueElements ,"***",Object.keys(unique).length)
    return uniqueElements.size === Object.keys(unique).length;
};
