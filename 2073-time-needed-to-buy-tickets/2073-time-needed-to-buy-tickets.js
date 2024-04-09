/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    for(let i =0 ;i<tickets.length;i++){
        if(tickets[i]<tickets[k])time +=tickets[i];
        else time+=tickets[k];
        if(i>k && tickets[i]>=tickets[k])time--;
        console.log(time)
    }
    return time;
};