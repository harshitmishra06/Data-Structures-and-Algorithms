/*-----------------Using Map---------------------------*/
var twoSum = function(arr, target) {
    let map = new Map();
    let diff=0;
    for(let i=0;i<arr.length;i++){
     diff=target-arr[i];
    if(map.has(diff)){
        return [map.get(diff),i];
    }
    else{
        map.set(arr[i],i)
    }
    }
};

/*-------------------------------------------------------*/

