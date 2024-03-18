/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
   let newWord =[];
    for(let i =0;i < s.length ;i++){
        if(s[i]=='i'){
            newWord.reverse();
        }else{
            newWord.push(s[i]);
        }
    }
    return newWord.join('');
};