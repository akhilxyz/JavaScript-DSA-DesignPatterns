// Problem: Find Maximum Element in an Array
// Question:

// Write a function findMax(arr) that takes an array of numbers as input and returns the largest number in that array. 
// If the array is empty, the function should return null.


function findMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null; // Return null for empty array
    }

    // Initialize max with the first element of the array
    let max = arr[0];

    // Loop through the array to find the maximum element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max; // Return the maximum element found
}

// Example usage
console.log(findMax([1, 3, 5, 2, 4])); // Output: 5
console.log(findMax([-1, -3, -2, -5])); // Output: -1
console.log(findMax([10])); // Output: 10
console.log(findMax([])); // Output: null


// Explanation:
// Function Purpose: The function aims to identify and return the maximum value present in an array of numbers.

// Input:

// An array of numbers (arr), which can include positive numbers, negative numbers, or zero.
// Output:

// The function should return the largest number found in the array.
// If the array is empty, the function will return null to indicate that there is no maximum value.
// Approach:

// Initialize a variable to keep track of the maximum value found so far.
// Loop through each element in the array:
// If the current element is greater than the maximum value tracked, update the maximum value.
// After looping through all elements, return the maximum value.
// Ensure to handle the case where the array is empty before performing the loop.
