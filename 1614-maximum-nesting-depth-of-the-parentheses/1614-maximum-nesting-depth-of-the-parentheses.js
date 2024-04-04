/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth =0;
    let stack = [];
    for(let char of s){
        if(char == "("){
            stack.push("(")
        }else if(char ==")" && stack.length){
            depth = Math.max(depth,stack.length);
            stack.pop();
        }
    }
    return depth;
};