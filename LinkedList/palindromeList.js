var isPalindrome = function (head) {
  if (head === null) return false;
  let curr = head;
  let n = [];
  let flag = true;
  while (curr !== null) {
    n.push(curr.val);
    curr = curr.next;
  }
  if (n.length === 1) return true;
  for (let i = 0; i < Math.floor(n.length / 2); i++) {
    if (n[i] !== n[n.length - i - 1]) {
      flag = false;
    }
  }
  return flag;
};


/*--------------------------Method 2---------------------------*/

/* find mid node*/
if(head===null || head.next==null) return true;
let slow=head;
let fast=head;
while(fast!==null && fast.next!==null){
    slow=slow.next;
    fast=fast,next.next;
}


/* reverse the second half*/
let prev=null;
let curr=slow;
let temp=0;
while(curr!==null){
    
temp=curr.next;
curr.next=prev;
prev=curr;
curr=temp;
}


/*checking Palindrome*/

let firstList=head;
let secondList=prev;
while(secondList!==null){
    if(firstList.val!=secondList.val){
        return false;
    }
    else {
        firstList=firstList.next;
        secondList=secondList.next;
    }
    return true;
}