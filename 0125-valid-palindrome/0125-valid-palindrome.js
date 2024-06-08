/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let newS = ""
    for(let i =0;i<s.length;i++){
        let code = s.charCodeAt(i)
        if(code>=97 && code <=122 || code>=48 && code <=57){
            newS +=s[i]
        }
    }
    console.log(newS)
     return helper(newS);
};
let helper = (s)=>{
    if(s.length<=1)return true;
    if(s[0]==s[s.length-1]){
        return helper(s.substring(1,s.length-1))
    }
    return false;
}