/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let letter of s){
        console.log(letter)
         t = t.replace(letter, '');
    }
       
    return t;
};