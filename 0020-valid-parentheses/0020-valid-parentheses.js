/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!==0)return false;
    let stack = [];
    let openPar = ['(','{','['];
    let closePar = [')','}',']']
    for(let i =0 ;i< s.length;i++){
        if(openPar.includes(s[i])){
            stack.push(s[i])
        }else if(closePar.includes(s[i])){
            let suitablePar = openPar[closePar.indexOf(s[i])];
            if(stack.length ==0 || stack.pop() !== suitablePar){
                return false;
            }
        }
    }
    if(stack.length>1)return false;
    return true;
};