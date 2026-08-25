var MyQueue = function () {
    this.stack = [];
};

MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function () {

    // Remove the top element
    let x = this.stack.pop();

    // If this was the bottom element, this is our queue front
    if (this.stack.length === 0) {
        return x;
    }

    // Recursively find the bottom element
    let res = this.pop();

    // Put the removed element back
    this.stack.push(x);

    return res;
};

MyQueue.prototype.peek = function () {

    let x = this.stack.pop();

    // Bottom element = front of queue
    if (this.stack.length === 0) {
        this.stack.push(x);
        return x;
    }

    let res = this.peek();

    // Restore the element
    this.stack.push(x);

    return res;
};

MyQueue.prototype.empty = function () {
    return this.stack.length === 0;
};