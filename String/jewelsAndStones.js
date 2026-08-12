/*-------------------Using sets--------------*/
var numJewelsInStones = function(jewels, stones) {
    let set =new Set(jewels);
    let count=0;
    for(let i=0;i<stones.length;i++){
        if(set.has(stones[i])){
            count++
        }
    }
  return count;
};


/*----------------Using loops----------------*/
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(jewels[i]===stones[j]){
                count++
            }
        }
    }
    return count;
};

