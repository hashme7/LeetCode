/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   for(let i =0 ; i < heights.length -1 ; i++){
        for(let k =0 ; k < heights.length ; k++){
            if(heights[k]<heights[k+1]){
                let temp = heights[k];
                heights[k]= heights[k+1];
                heights[k+1] = temp;
                temp = names[k];
                names[k]= names[k+1];
                names[k+1] = temp;
            }
        }
   }
    return names;
};