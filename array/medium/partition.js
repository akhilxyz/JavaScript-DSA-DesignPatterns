// Problem Statement
// Array Partition:
// Given an array of 2n integers, group these integers into n pairs of integers, such that the sum 
// of the minimum of each pair is maximized. Return the maximized sum.

// Explanation
// To maximize the sum of the minimums of each pair, it is beneficial to sort the array first. 
// By pairing the integers in a way that minimizes the loss of the smallest integers, 
// we can ensure that we get the maximum possible sum. Specifically, pairing consecutive elements in a sorted array 
// helps achieve this goal, as the minimum of each pair will be the smaller of the two sorted elements.

// Example
// Input:
// nums = [1, 4, 3, 2]

// Output:
// 4

// Explanation:
// The optimal pairs are (1, 2) and (3, 4). The minimums are 1 and 3, and their sum is 1 + 3 = 4.

// Approach
// Sort the Array: Begin by sorting the array of integers.
// Pair the Elements: Iterate through the sorted array and pair the elements. Since the array is sorted, 
// the pairs will be (nums[0], nums[1]), (nums[2], nums[3]), ....
// Calculate the Sum of Minimums: For each pair, add the first element (the minimum) to the total sum.
// Return the Sum: Finally, return the calculated sum.


function arrayPairSum(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    let sum = 0;
    
    // Step 2: Iterate through the array and sum the minimums of each pair
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    // Step 3: Return the maximized sum
    return sum;
}

// Example usage:
const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result); // Expected output: 4


// Time and Space Complexity
// Time Complexity:
// The time complexity is dominated by the sorting step, which is O(n log n), 
// where n is the number of integers in the array.

// Space Complexity:
// The space complexity is O(1) if we sort the array in place (or O(n) if using a sorting algorithm 
// that requires additional space). However, since we are not using any extra space besides a few variables, 
// we can consider the space complexity to be O(1) in the context of additional variables.

