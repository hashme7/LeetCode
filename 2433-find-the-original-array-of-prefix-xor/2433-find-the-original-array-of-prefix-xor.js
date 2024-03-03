/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let newArr = [];
    for(let i = 0 ; i< pref.length ; i++){
        let x = pref[i] ^ pref[i-1];
        console.log(x)
        newArr.push(x);
    }
    return newArr;
};