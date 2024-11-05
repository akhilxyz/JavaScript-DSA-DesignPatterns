// Problem: Kth Largest Element in an Array

// Question:

// Given an unsorted array of integers, find the kth largest element in the array. Note that it is the kth largest 
// element in the sorted order, not the kth distinct element.

// You must solve this problem in linear time complexity.

Explanation:
// To solve the problem, we need to determine the element that would be in the kth position 
// if the array were sorted in descending order.

// Approach:
// Heap Approach:

// Use a min-heap (priority queue) to keep track of the top k largest elements.
// Iterate through the array, and for each element:
// If the heap has less than k elements, add the element to the heap.
// If the heap is full (contains k elements) and the current element is larger than the smallest element in the heap, 
// replace the smallest element with the current element.
// The root of the min-heap will be the kth largest element after processing all elements.
// Quickselect Algorithm:

// This is a selection algorithm to find the kth largest element without fully sorting the array. It is an optimized version of QuickSort.
// Choose a pivot and partition the array into two parts: elements greater than the pivot and elements less than the pivot.
// Recursively apply the algorithm to the part of the array that contains the kth largest element.

// Example:
// Input: nums = [3, 2, 1, 5, 6, 4], k = 2
// Output: 5
// Explanation: The second largest element in the sorted order of the array is 5.


function findKthLargest(nums, k) {
    const minHeap = [];

    for (let num of nums) {
        minHeap.push(num);
        if (minHeap.length > k) {
            minHeap.sort((a, b) => a - b);
            minHeap.shift(); // Remove the smallest element
        }
    }

    return minHeap[0]; // The root of the min-heap is the kth largest element
}

// Complexity Analysis:
// Time Complexity:

// Heap operations (insert and delete) are 
// 𝑂 ( log 𝑘) Since we perform these operations for each of the 
// 𝑛 elements, the total time complexity is 
// 𝑂 ( 𝑛 log 𝑘 )

// Space Complexity:

// The space complexity is 
// 𝑂 ( 𝑘 ) for the min-heap, which holds up to 𝑘 elements.

// Implementation without Array Methods
// Here’s the implementation using the Quickselect algorithm without any predefined array methods:

function findKthLargest(nums, k) {
    const target = nums.length - k;
    
    function quickSelect(left, right) {
        const pivotIndex = partition(nums, left, right);
        
        if (pivotIndex === target) {
            return nums[pivotIndex];
        } else if (pivotIndex < target) {
            return quickSelect(pivotIndex + 1, right);
        } else {
            return quickSelect(left, pivotIndex - 1);
        }
    }
    
    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left;
        
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, right);
        return i;
    }
    
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    return quickSelect(0, nums.length - 1);
}

// Complexity Analysis
// Time Complexity:

// Average case: 
// O(n) because each partition step reduces the search space by half.
// Worst case: 

// O(n 2 ) (if the array is extremely unbalanced in each partition), but with a good pivot selection, this is rare.
// Space Complexity: 

// O(1), because this solution is in-place (modifies the original array without using additional data structures).