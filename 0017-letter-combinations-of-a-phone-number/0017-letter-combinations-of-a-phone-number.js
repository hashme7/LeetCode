/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let result = [];
    function dfs(i, currStr) {
        if (currStr.length === digits.length) {
            result.push(currStr);
            return;
        }
        digitsInPhone = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        for (ch of digitsInPhone[digits[i]]) {
            dfs(i + 1, currStr + ch);
        }
    }
    if (digits.length>0) {
        dfs(0, "")
    }
    return result;
};