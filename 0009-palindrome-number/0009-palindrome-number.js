/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number=x.toString();
    let left=0;
    let right=number.length-1;
    while(left<right){
        if(number[left]!==number[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};