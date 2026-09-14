/*---------------Using Map----------------------------*/

var twoSum = function (arr, target) {
  let map = new Map();
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (map.has(diff)) {
      return [map.get(diff) + 1, i + 1];
    } else {
      map.set(arr[i], i);
    }
  }
};

/*----------------Using Two Pointer Approach as array is better and it will help in maintaining space complexity than map----------------*/


var twoSum = function(arr, target) {
    let l=0;
    let r=arr.length-1;
    while(l<r){
       let sum=arr[l]+arr[r];
       if(sum>target){
        r--;
       }
       else if(sum===target) return [l+1 ,r+1];
       else{
        l++;
       }

    }
};

// time complexity=O(n)
// space complexity=O(1);
/*------------------------------------using Binary search Time complexity=O(nlogn)---------------------*/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = target - nums[i];

    let l = i + 1;
    let r = nums.length - 1;

    while (l <= r) {
      let m = l + Math.floor((r - l) / 2);

      if (nums[m] === diff) {
        return [i + 1, m + 1];
      } else if (nums[m] > diff) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
};
