var rotateRight = function(head, k) {
    if(!head) return null;
    let length=0;
    let curr=head;
    while(curr){
        length++;
        curr=curr.next;
    }
    for(let i=0;i<k%length;i++){
       let slow=head;
       let fast=head.next

       while(fast && fast.next){
        slow=slow.next;
        fast=fast.next;
       }
  
       slow.next=null;
       fast.next=head;
       head=fast;
    }
    return head;
};