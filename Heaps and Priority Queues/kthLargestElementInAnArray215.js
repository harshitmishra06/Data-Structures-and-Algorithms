// Using sort function;
var findKthLargest = function(nums, k) {
    return nums.sort((a,b)=> b-a)[k-1];  
  };



//----------Using Heap---------------------------------------
//For Kth largest element we will use Min-Heap(min-priority queue)

var findKthLargest = function(nums, k) {
  let pq = new MinPriorityQueue();

  for(let i=0;i<nums.length;i++){
    pq.enqueue(nums[i]);
    if(pq.size()>k){
        pq.dequeue();
    }
  } 
  return pq.front();
};


// Time-complexity = for enqueue max element we will insert is k so O(log k) and loop will take n and dequeue will also take O(log k ) so overall
// time complexity will be n[O(log k) + O(log k)] so it will be O(n log k).

//Space-Complexity = extra space we are using for priority queue so it will be O(log k).

