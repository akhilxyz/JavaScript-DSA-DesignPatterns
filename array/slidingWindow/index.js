// The sliding window technique is a powerful method for solving problems that involve finding a subset of elements
// in an array or a string that satisfy a specific condition. It’s commonly used to find subarrays or substrings and
// works well when the problem involves finding contiguous sequences.

// When to Use Sliding Window
// The sliding window technique is useful in problems that:

// Require finding a subarray or substring within a specific range or size.
// Involve contiguous elements.
// Ask for optimization in terms of time or space by reducing repetitive calculations (e.g., sum, product, length).
// Types of Sliding Window
// There are two main types of sliding window:

// Fixed-Length Window: The window size is fixed, and we slide it across the array or string.
// Variable-Length Window: The window size can change depending on the conditions, which often happens when
// the goal is to find the minimum or maximum window length that satisfies a condition.

// Fixed-Length Sliding Window Example
// Imagine you have an array of integers, and you want to find the maximum sum of a subarray of length k.
// Here’s how the sliding window works with a fixed length:

/**
 * Function to find the maximum sum of a subarray of length k.
 *
 * @param {number[]} arr - The input array containing integers.
 * @param {number} k - The length of the subarray to find the maximum sum for.
 * @returns {number} The maximum sum of a subarray of length k.
 */
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window, subtract the element that goes out and add the new element
  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(maxSumSubarray([1,2,3,4,5,6], 3)); // Output: 9

// Explanation
// First, calculate the sum of the initial window of size k.
// For each new element in the array, add it to the window sum and remove the element that’s sliding out.
// Keep track of the maximum sum encountered.


// Why This Works Efficiently
// Each step of the loop only adjusts the sum by a small amount rather than recalculating it from scratch, giving us an 
// 𝑂 (𝑛)
// O (n) solution. This is much faster than recalculating the sum for every window, which would take 
// 𝑂 ( 𝑛 × 𝑘 )
// O (n×k) time complexity.


// Variable-Length Sliding Window Example

// Here's a simple example of a variable-length sliding window problem: Finding the smallest subarray with a sum that’s at least a given target.

// Problem Statement
// Given an array of positive integers and a target sum, find the length of the smallest contiguous subarray whose sum is greater than or equal to the target. If no such subarray exists, return 0.

// Example  

// Input:

// javascript

// arr = [2, 1, 5, 2, 3, 2]
// target = 7

// Output: // 2

// Explanation: The smallest subarray with a sum of at least 7 is [5, 2], which has a length of 2.


/**
 * Function to find the length of the smallest contiguous subarray whose sum is greater than or equal to the target.
 * If no such subarray exists, it returns 0.
 *
 * @param {number} target - The target sum required for the subarray.
 * @param {number[]} arr - The array of positive integers to search for the subarray.
 * @returns {number} The length of the smallest subarray that satisfies the condition.
 */
function minSubArrayLen(target, arr) {
    let minLength = Infinity;
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end]; // Add current element to the window's sum
        // Shrink the window as small as possible while the sum >= target
        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1); // Update minLength
            sum -= arr[start]; // Remove the starting element from the sum
            start++; // Move start forward to shrink the window
        }
    }

    return minLength === Infinity ? 0 : minLength; // If no valid subarray found, return 0
}

console.log(minSubArrayLen(7, [2, 1, 5, 2, 3])); // Output: 2
