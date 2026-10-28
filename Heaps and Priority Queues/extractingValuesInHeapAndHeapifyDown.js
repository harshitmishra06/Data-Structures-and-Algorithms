// IMPORTANT NOTE :- Extraction (delete) only happens from the top in heap.(but instead of delete we say extracting value from heap).

// Why from the top?
// Because we dont want to mess with our heap. We can understand this by the example of heap of stones we can only remove from top, if we try to remove from middle it will disturb the structure of heap.

// Example:- Let's take a eg with the min-heap  [0,4,1,10,20].
// If we have to delete the element 0 which is the first element we will replace 0 by 20(which is the last element) then we will delete 0(which is the last element by replacing). Now after deleting we will have to heapify-down to make it again the min-heap.
// So, for above example the - firt heap will look like after replacing 0 with 20. [20,4,1,10,0] then we will delete 0 . [20,4,1,10]. since this is not min-heap so, after performing heapify down the final min -heap will look like [1,4,20,10].



// Min-heap

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    if (this.heap.length < 1) return null;
    let min = this.heap[0];
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let n = this.heap.length;

    let smallest = i;
    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this, this.heapifyDown(smallest);
    }
  }

  peek() {
    if (!this.heap.length) return null;
    return this.heap[0];
  }
}
let heap = new MinHeap();
heap.insert(5);
heap.insert(20);
heap.insert(4);
console.log(heap.peek());
heap.insert(10);
heap.insert(1);
heap.insert(0);
console.log(heap.peek());
console.log(heap.extract());
console.log(heap.extract());
heap.insert(7);
console.log(heap.extract());
console.log(heap);
