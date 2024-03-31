/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const numString = x.toString();
  let sum = 0;
  for (let digit of numString) {
    const digitValue = parseInt(digit);
    sum += digitValue;
  }
    console.log(sum);
    if(x%sum!=0){
       return -1;
    }else{
         return sum;
    }
};