// Merge Two Arrays Without Duplicates:
// Write a function mergeArrays that takes two arrays as input and returns a single array that contains 
// all unique elements from both arrays, without any duplicates. The order of elements in the output 
// array should be the same as they appear in the input arrays.

// Example:
// javascript
// Copy code
// mergeArrays([1, 2, 3], [3, 4, 5]);
// // Output: [1, 2, 3, 4, 5]
// Explanation
// In this problem, we have two arrays, and we want to combine them into one array without including any duplicate values.
// Here’s how it works:

// First, we combine all elements from both arrays into a single array.
// We then filter out any duplicate values so that each element appears only once.
// Finally, we return this combined array as the result.
// To solve this, we can use a set data structure, which automatically removes duplicates, or use array methods like filter() or includes().


function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// You can implement the function using various methods to ensure duplicates are removed, like sets or filtering. 

// Pros:
// Simplicity: Very concise and easy to read.
// Performance: Generally efficient for merging and deduplicating.
// Modern JavaScript: Utilizes ES6 features, making it clean.

// Cons:
// Browser Compatibility: Requires ES6 support (not an issue in modern environments).