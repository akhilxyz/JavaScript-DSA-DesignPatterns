// Write a function hasDuplicates that takes an array of values and checks for duplicate elements. 
// If there are any duplicates, the function should return true. If all elements in the array are unique, 
// it should return false.

// Example:

// Input: [1, 2, 3, 4, 5]
// Output: false
// Input: [1, 2, 3, 4, 2]
// Output: true
// Explanation:
// To determine if an array contains duplicates, we need to examine each element and check if it appears more than once. 
// If there’s a repeated element, we can return true right away. If we reach the end of the array without finding duplicates, 
// we return false.

function hasDuplicates(arr) {
    const seen = new Set();
    for (let value of arr) {
        if (seen.has(value)) {
            return true; // Duplicate found
        }
        seen.add(value);
    }
    return false; // No duplicates found
}

// One simple way to solve this is by using a Set, which stores only unique values. By adding elements to the Set as we iterate 
// through the array, we can check for duplicates based on whether the Set already contains the current element.