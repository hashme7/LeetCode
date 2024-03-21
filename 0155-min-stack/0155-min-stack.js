
var MinStack = function() {
    this.stack =[];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length == 0|| this.minStack[this.minStack.length-1]>=val){
        this.minStack.push(val);
    }
    console.log(this.stack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    console.log(this.stack)
    console.log(this.minStack);
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return  this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log("55555",this.minStack)
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */