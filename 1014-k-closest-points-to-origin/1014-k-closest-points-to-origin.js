/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let dist = (x,y)=>{
        return x*x+y*y;
    }
    let maxHeap  = new MaxPriorityQueue();
    for(let [x,y] of points){
        let distance = dist(x,y)
        maxHeap.enqueue([x,y],distance);
        if(maxHeap.size()>k){
            maxHeap.dequeue();
        }
    }
    let output = [];
    while(maxHeap.size()){
        output.push(maxHeap.dequeue().element);
    }
    return output;
};
