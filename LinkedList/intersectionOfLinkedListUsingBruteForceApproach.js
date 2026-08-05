var getIntersectionNode = function(headA, headB) {
    if(headA===null || headB===null) return null;
    let currA=headA;
    let currB=headB;
    let set =new Set();
    while(currA!==null){
        set.add(currA)
        currA=currA.next;
    }
    while(currB!==null){
        if(set.has(currB)){
            return currB;
        }
        else{
            currB=currB.next;
        }
    }
    return null;
};