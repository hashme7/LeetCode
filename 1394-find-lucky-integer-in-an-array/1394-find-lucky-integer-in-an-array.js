/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let lucky = -1;
    for(let i =0;i<arr.length;i++){
        let count = 1;
        for(let k =0 ;k<arr.length;k++){
            if(i!=k && arr[i]==arr[k]){
                count++;
            }
        }
        if(arr[i]==count){
            if(count>lucky)lucky = count;
        }
    }
    return lucky;
};