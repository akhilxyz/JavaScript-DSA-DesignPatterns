// Problem: Max Subarray Sum (Kadane’s Algorithm)
// Given an array of integers, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return that sum.


// Example

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.


function maxSubArray(nums) {
    let maxSofar = nums[0]
    let maxEndingHere = nums[0]
    
    for(let i = 1 ; i < nums.length ;i ++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])
        maxSofar = Math.max(maxSofar , maxEndingHere)
    }
    
    return maxSofar

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
// Output: 6


// Approach
// Initialize Variables:

// We’ll keep two variables:
// maxSoFar (to track the maximum sum found so far) and
// maxEndingHere (to track the maximum sum for the subarray that ends at the current position).
// Set both maxSoFar and maxEndingHere to the first element in the array.
// Iterate Through the Array:

// Starting from the second element (index 1), update maxEndingHere to be the maximum of:
// The current element alone (i.e., starting a new subarray)
// The current element added to maxEndingHere (i.e., continuing the existing subarray)
// Update maxSoFar to be the maximum of maxSoFar and maxEndingHere.
// Result:

// After traversing the array, maxSoFar will contain the maximum subarray sum.

// Complexity Analysis
// Time Complexity: 
// 𝑂(𝑛)
// O(n)

// We iterate through the array once, so the time complexity is linear in relation to the array size.
// Space Complexity: 
// 𝑂(1)
// O(1)

// Only a constant amount of extra space is used (maxSoFar and maxEndingHere).
