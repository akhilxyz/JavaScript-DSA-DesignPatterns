// Problem: Product of Array Except Self

// Given an array nums of n integers, return an array output such that output[i] is equal to 
// the product of all the elements of nums except nums[i].

// You are not allowed to use division, and your solution should have a time complexity of O(n).

// Example

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Explanation:
// - For index 0: the product of all elements except nums[0] = 2 * 3 * 4 = 24
// - For index 1: the product of all elements except nums[1] = 1 * 3 * 4 = 12
// - For index 2: the product of all elements except nums[2] = 1 * 2 * 4 = 8
// - For index 3: the product of all elements except nums[3] = 1 * 2 * 3 = 6


function productExceptSelf(nums) {
    const n = nums.length;
    const output = Array(n).fill(1); // Initialize output array with 1s

    // Calculate left products and store them in output array
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products and multiply with the left product in output array
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
}

// Example usage
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]


// Approach:

// Initialize Two Arrays:

// Left Products: At each position i, store the product of all elements to the left of i.
// Right Products: At each position i, store the product of all elements to the right of i.
// Compute Left and Right Products:

// First, traverse the nums array from left to right to fill the leftProducts array.
// Next, traverse from right to left to fill the rightProducts array.
// Calculate the Result:

// For each index i, output[i] is the product of leftProducts[i] and rightProducts[i], 
// which gives the product of all elements except the one at i.

// Optimization:

// Instead of using extra arrays for leftProducts and rightProducts, maintain two running products 
// (one from the left and one from the right) 
// and update output in a single traversal.