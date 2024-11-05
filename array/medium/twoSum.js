
// Certainly! Here are the questions, explanations, and initial setups for the Two Sum and 
// Remove Duplicates from an Array problems.

// Problem 1: Two Sum
// Question
// Given an array of integers nums and an integer target, return the indices of the two numbers such that 
// they add up to target.

// You may assume that each input has exactly one solution, and you may not use the same element twice. 
// Return the answer in any order.

// Explanation
// You need to find two distinct elements in the array whose sum equals the given target. Return their indices.
// If there is only one possible pair that can achieve this sum, you don’t need to handle multiple solutions.

// example::
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9, so return [0, 1].

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Explanation: nums[1] + nums[2] = 2 + 4 = 6, so return [1, 2].

// Input: nums = [3, 3], target = 6
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 3 + 3 = 6, so return [0, 1].


// Approach
// Brute Force (O(n^2) Time Complexity):

// Use two nested loops to check each pair of elements in the array.
// For each pair, check if their sum equals target.
// If they do, return their indices.
// Optimized Approach using Hash Map (O(n) Time Complexity):

// Create a dictionary (hash map) to store each element’s complement (target - num) as the key and its index as the value.
// Iterate through nums.
// For each number, check if it exists in the dictionary (i.e., if the complement has already been seen).
// If it exists, return the current index and the index of the stored complement.
// Otherwise, store the current number’s index in the dictionary.


function twoSum(nums, target) {
    // Object to store number and its index
    const numIndices = {};
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        // Check if complement is in numIndices
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        
        // Store index of current number in numIndices
        numIndices[num] = i;
    }
    
    // If no solution is found (shouldn't happen given the problem constraints)
    return [];
}

let arr = [2, 7, 11, 15]
console.log(twoSum(arr , 9))

// Space and Time Complexity
// Time Complexity:

// Brute Force: 
// 𝑂 (𝑛2) O(n2), where n is the length of the array.
// Optimized (Hash Map): 
// 𝑂 (𝑛)
// O(n), as we only need to traverse the array once.

// Space Complexity:

// Brute Force: 
// 𝑂 (1) O(1), no extra space required.
// Optimized (Hash Map): 
// 𝑂(𝑛) O(n), for storing elements in the hash map.
