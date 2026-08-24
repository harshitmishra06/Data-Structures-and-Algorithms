var MyStack = function () {
  this.queue1 = [];
};

MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.queue1.length - 1;
  for (let i = 0; i < n; i++) {
    this.queue1.push(this.queue1.shift());
  }
  let res = this.queue1.shift();
  return res;
};

MyStack.prototype.top = function () {
  let n = this.queue1.length - 1;
  for (let i = 0; i < n; i++) {
    this.queue1.push(this.queue1.shift());
  }
  let res = this.queue1.shift();
  this.queue1.push(res);
  return res;
};

MyStack.prototype.empty = function () {
  if (this.queue1.length == 0) return true;
  else return false;
};
