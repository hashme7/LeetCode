/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashMap = new Map();
    for(let c of s){
        hashMap[c] = (hashMap[c]||0)+1;
    }
    for(let i =0  ;i < s.length ;i++){
        if(hashMap[s[i]] ==1){
            return i;
        }
    }
    return -1;
};