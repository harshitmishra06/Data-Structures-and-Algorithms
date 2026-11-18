var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue();

  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }
  while (pq.size() > 1) {
    let y = pq.dequeue();
    let x = pq.dequeue();

    if (y - x > 0) {
      pq.enqueue(y - x);
    }
  }
  return pq.dequeue() || 0;
};


// Time-Complexity = O(n log n);
// Space-Complexity = O(n);


// In leetcode we can use fromArray to create a priority queue from existing array ..this is provided to js users in leetcode.

var lastStoneWeight = function (stones) {
    let pq = MaxPriorityQueue.fromArray(stones);
  
    while (pq.size() > 1) {
      let y = pq.dequeue();
      let x = pq.dequeue();
  
      if (y - x > 0) {
        pq.enqueue(y - x);
      }
    }
    return pq.dequeue() || 0;
  };
  