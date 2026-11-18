// Using Map and Priority Queue/Heap:-

var topKFrequent = function (nums, k) {
  //create a Map of frequency => Time-complexity for this is O(n)

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // Add elements to min priority queue   time-complexity for adding = O(n log k)

  let pq = new MinPriorityQueue((x) => x.freq);
  for (let [key, value] of map) {
    pq.enqueue({ val: key, freq: value }); // O(k)
    if (pq.size() > k) {
      pq.dequeue(); // removing smallest element  O(k)
    }
  }

  // return remaining K elements in PQ

  return pq.toArray().map((x) => Number(x.val));
};



// Space-Complexity = O(n) for map and O(k) for PQ so overall it will be (n>k) = O(n).
//Time-complexity =  O(n log k).