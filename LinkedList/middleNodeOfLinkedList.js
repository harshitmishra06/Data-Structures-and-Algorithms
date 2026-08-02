
/*----------Method 1-----------------*/
var middleNode = function(head) {
   
    let size=0;
    let curr=head;
    
     while(curr!==null){
         curr=curr.next;
         size++;
     }
 curr=head;
     for(let i=0;i<=Math.floor(size/2);i++){
        curr=curr.next;
     }
     return curr;
  };
 



/*=====================SLOW and FAST Pointer APPROACH=======================*/

var middleNode = function(head) {
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}