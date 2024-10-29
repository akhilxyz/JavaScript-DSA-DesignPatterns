// Problem Statement: Remove Duplicates from an Array
// Question:
// Write a function that takes an array as input and returns a new array containing only unique values, 
// effectively removing all duplicate elements from the original array.


// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


// Explanation
// When working with arrays, it is common to encounter situations where there are duplicate values. 
// Removing these duplicates is often necessary to ensure that each value in the resulting array is unique. 
// This problem tests your understanding of array manipulation and data structures.


// Approach
// Using a Set: The simplest way to remove duplicates is to utilize a Set in JavaScript. 
// A Set automatically enforces uniqueness, so adding duplicate values to a set will result 
// in only unique values being stored.

// Convert the array to a set and then back to an array.
// Using a Loop: Alternatively, you can loop through the array and check if each element is already in a new array. 
// If it’s not, add it to the new array.

// Use an auxiliary array to store unique values.
// Use the Array.includes() method to check for duplicates.


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test the function
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // Output: [1, 2, 3, 4, 5]


// Suggestions
// Consider edge cases, such as:

// An empty array should return an empty array.
// An array with all unique values should return the same array.
// An array with all identical values should return a single element.
// Think about performance and choose an approach that is efficient for larger arrays.

