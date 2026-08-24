
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};


MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.queue1.length - 1;
    for (let i = 0; i < n; i++) {
        this.queue2.push(this.queue1.shift())
    }
    let res = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return res;
};


MyStack.prototype.top = function () {
    let n = this.queue1.length - 1;
    for (let i = 0; i < n; i++) {
        this.queue2.push(this.queue1.shift())
    }
    let res = this.queue1.shift();
    this.queue2.push(res);
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return res;
};

MyStack.prototype.empty = function () {
if(this.queue1.length==0)return true;
else return false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
