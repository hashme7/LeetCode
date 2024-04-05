/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    s = s.split('');
    for(let i =1 ;i<s.length ;i++){
       if(s[i] != s[i-1] && (s[i].toUpperCase() == s[i-1] ||s[i].toLowerCase() == s[i-1])){
            for(let j = i-1;(j+2)<s.length;j+=2){
                s[j] = s[j+2];
                s[j+1]= s[j+3];
            }
            i-=2;
            s.length-=2;
       }
    }
    return s.join('');
};