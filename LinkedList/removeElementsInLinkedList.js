var removeElements = function(head, val) {
    if(head===null) return head;
    let prev=head;
    let curr=head.next;
    while(curr!==null){
     if(prev.val===val){
         head=head.next;
         prev = head;
         curr = curr.next
     }
     else if (curr.val===val){
         prev.next=curr.next;
         curr=curr.next;
     }
     else{
         prev=prev.next;
         curr=curr.next;
     }
 
    }
    return head.val === val ? null : head; 
 };