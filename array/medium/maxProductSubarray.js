// Problem Statement: Maximum Product Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest product and return that product.


// Input: nums = [2, 3, -2, 4]
// Output: 6
// Explanation: The subarray [2, 3] has the largest product 6.

// Input: nums = [-2, 0, -1]
// Output: 0
// Explanation: The subarray [0] has the largest product 0.


// Explanation
// The problem requires finding a contiguous subarray within a one-dimensional array that yields the maximum product. 
// The key challenges arise from the presence of negative numbers, which can flip the sign of the product, and zeroes, 
// which reset the product.


function maxProduct(nums) {
    // Handle edge case for empty array
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            // Swap currentMax and currentMin
            [currentMax, currentMin] = [currentMin, currentMax];
        }
        
        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);
        
        maxProduct = Math.max(maxProduct, currentMax);
    }
    
    return maxProduct;
}


// Approach
// Initialization: Maintain two variables, maxProduct for the maximum product found so far and currentMax and currentMin 
// for tracking the maximum and minimum products that can be achieved up to the current index.

// Iterate through the Array:

// For each element:
// If the current element is negative, swap currentMax and currentMin because multiplying by a negative number will flip the sign.
// Update currentMax by taking the maximum of the current element itself or the product of currentMax with the current element.
// Update currentMin in a similar manner.
// Update maxProduct to be the maximum of itself and currentMax.
// Return the Result: At the end of the loop, maxProduct will contain the maximum product of any contiguous subarray.

// Space and Time Complexity
// Time Complexity: O(n), where n is the number of elements in the array. We only need to traverse the array once.
// Space Complexity: O(1), since we are using a constant amount of space for our variables.