// Heap Sort Code

let arr = [1, 4, 10, 5, 26, 73, 99, 0, -1, -8, 3, 6, 7];

function heapSort(arr) {
  let n = arr.length;

  // create max-heap
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // sort the array
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

const sortedArray = heapSort(arr);
console.log(sortedArray);


//--------------------------------------------------------------------------------------------

// Time-Complexity & Space Complexity of Heap Sort:-

// Space-Complexity = O(1);

// Time-Complexity for heapifyDown = O(log n);

// Time-Complexity for creating a max-heap will be = O(n); Important point to Note.

// Time-Complexity for heapSort = O(n log n);



// Heap and quick sort are unstable sorting algorithms where as Bubble, insertion, and merge sort are stable algo.

// Stable sorting algo ensures that same value element maintains relative Order.

