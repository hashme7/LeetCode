/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     var count = 0;
    for(var i = s.length-1;i>=0;i--)
    {
        if(s[i]==' ')
        {
            if(count>0)
            {
                return count;    
            }
            continue;
        }
        count++;
    }
    return count;
};