/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let larray = title.toLowerCase().split(' ');
    larray.map((x,i)=>{
        if(x.length>2){
            larray[i] = larray[i].charAt(0).toUpperCase() + x.slice(1); 
        }else{
            larray[i] = x.toLowerCase();
        }
    })
    return larray.join(' ')
};