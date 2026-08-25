var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  let n = this.stack1.length - 1;
  for (let i = 0; i < n; i++) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack1.pop();
  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};

MyQueue.prototype.peek = function () {
  let n = this.stack1.length - 1;
  for (let i = 0; i < n; i++) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack1.pop();
  this.stack2.push(res);
  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};

MyQueue.prototype.empty = function () {
  if (this.stack1.length === 0) return true;
  else return false;
};



/*------------------------Method 2-------------------------------------*/

var MyQueue = function() {
  this.stack1=[];
  this.stack2=[];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
if(this.stack2.length==0){
  while(this.stack1.length){
      this.stack2.push(this.stack1.pop());
  }
}
return this.stack2.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
 if(this.stack2.length==0){
  while(this.stack1.length){
      this.stack2.push(this.stack1.pop());
  }
}
return this.stack2[this.stack2.length-1]
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  if(this.stack1.length===0 && this.stack2.length===0) return true;
  else return false;
};
