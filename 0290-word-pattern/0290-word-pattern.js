/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let newS = s.split(' ');
    let map = new Map();
    let set = new Set();
    if (newS.length !== pattern.length) return false;
    for(let i =0 ;i< pattern.length;i++){
        if(map.has(newS[i])){
            console.log(map.get(newS[i]),pattern[i]);
            if(map.get(newS[i]) != pattern[i])return false;
        }else{
            map.set(newS[i],pattern[i]);
            if(set.has(pattern[i])){
                console.log('vannu')
                return false;
            }else{
                set.add(pattern[i]);
            }
        }
        console.log("set",set)
    }
    return true;
};