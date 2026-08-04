var deleteDuplicates = function(head) {
    if(head===null) return head;
    let curr=head.next;
    let prev=head;
    while(curr!==null){
        if(curr.val==prev.val){
        prev.next=curr.next;
        curr=curr.next;
    }
    else{
        prev=prev.next;
        curr=curr.next;
    }
    }
    return head;
};