export function bubble(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let isSwapped=false;
    for (let j = 0; j < arr.length-1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        isSwapped=true;
      }
    }
    if(!isSwapped) break;
  }
  return arr;
}
let val = bubble([5, 2, 4, 1]);
console.log(val);






