var reverseList = function(head) {
    let curr=head;
    let pre=null;
    while(curr!==null){
        let temp=curr.next;
        curr.next=pre;
        pre=curr;
        curr=temp;
    }
    return pre;
    
};
git 