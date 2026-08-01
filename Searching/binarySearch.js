import { bubble } from "./bubbleSort.js";

function binary(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == arr[mid]) return mid;
    else if (arr[mid] > target) {
      right = mid-1;
    } else {
      left = mid+1;
    }
    
  }
  return -1;
}
let sortedArray = bubble([-1, 0, 3, 5, 9, 12,4,6,22,8]);
let res=binary(sortedArray,9)
console.log(res,sortedArray);
