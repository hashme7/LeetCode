/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = 0;
    for(let i =1 ;i<s.length;i++){
        arr+=Math.abs(s.charCodeAt(i-1)-s.charCodeAt(i));
    }
    return arr;
};