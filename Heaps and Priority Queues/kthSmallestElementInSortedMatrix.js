// to find kth smallest element in sorted matrix we will use the heap/priority queue.

var kthSmallest = function (matrix, k) {

  // insert all the elements of first column in pq

  let n = matrix[0].length;
  let heap = new MinPriorityQueue((x) => x.val);
  for (let i = 0; i < n; i++) {
    heap.enqueue({ val: matrix[i][0], row: i, col: 0 });
  }

  // one by one find min value in PQ and increase coutn till k

  for (let count = 0; count < k - 1; count++) {
    let { val, row, col } = heap.dequeue();

    // add next element if it is present

    if (col + 1 < n) {
      heap.enqueue({ val: matrix[row][col + 1], row: row, col: col + 1 });
    }
  }
  return heap.dequeue().val;
};


// Time-Complexity =O(min(n,k) log min(n,k)) = O(n log n).
// Space-Complexity = O(min(n,k)).