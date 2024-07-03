/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = parseInt(String(x).split('').reverse().join(''),10)
    if(res > Math.pow(2, 31) - 1 || res< -Math.pow(2, 31))return 0;
    return x<0?(res *-1):res;
};