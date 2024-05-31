/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join(""))
    let BigNumber = (BigInt(1)+number).toString()
    let res = [];
    for(let i =0 ;i< BigNumber.length;i++){
        res.push(Number(BigNumber[i]));
    }
    return res
};