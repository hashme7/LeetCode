/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   let start = 0;
   let maxLen = 1;
   let l,r;
   for(let i = 1;i < s.length;i++){
        l = i-1;
        r =i;
        while(l >= 0 && r < s.length && s[l]==s[r]){
            if(r-l+1 >maxLen){
                maxLen = r-l+1;
                start = l;
            }
            l--;
            r++;
        }
        l = i-1;
        r = i+1;
        while(l>=0 && r<s.length && s[l]==s[r]){
            if(r-l+1>maxLen){
                maxLen = r-l+1;
                start = l;
            }
            l--;
            r++;
        }
   }
   return s.substr(start,maxLen);
};