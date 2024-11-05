// Problem: Find Missing Number
// Given an array nums containing n distinct numbers taken from the range 0, 1, 2, ..., n, 
// find the single number that is missing from the array.

// Input: nums = [3, 0, 1]
// Output: 2

// Input: nums = [0, 1]
// Output: 2

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

function findMissingNumber(nums) {
    const n = nums.length;
    
    // Calculate expected sum
    let sumExpected = (n * (n + 1)) / 2;
    
    // Calculate actual sum
    let sumActual = 0;
    for (let i = 0; i < n; i++) {
        sumActual += nums[i];
    }
    
    // Return the missing number
    return sumExpected - sumActual;
}



// Approach
// Since the array contains n distinct numbers from 0 to n, we know the sum of all integers from 0 to n can be 
// calculated using the formula:

// sum expected =𝑛×(𝑛 + 1 ) / 2
 
// To find the missing number:

// Calculate sum_expected, which is the sum of the range 0 to n (where n is the length of the array).
// Calculate the sum_actual, which is the sum of the elements in nums.
// The difference between sum_expected and sum_actual gives the missing number, as all other numbers are accounted for.