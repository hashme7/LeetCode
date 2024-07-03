/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr =[];
    let res = 0;
    x = x.toString();
    for(let i =0 ;i< x.length;i++){
        if(x[i]=='-'){
            arr.push(x[i]);
        }else{
            arr.unshift(x[i]);
        }
    }
    res = parseInt(arr.join(""),10)
    if(res > Math.pow(2, 31) - 1 || res< -Math.pow(2, 31))return 0;
    return x<0?(res *-1):res;
};