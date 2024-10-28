// Problem Statement: Find the Intersection of Two Arrays
// Question: Write a function that takes two arrays as input and returns a new array containing only the elements that are present
//  in both arrays. The result should not contain duplicates, and the order of elements in the resulting array should reflect 
//  the order of their first appearance in the first array.

// Explanation
// The intersection of two arrays refers to the common elements that appear in both arrays. For example, given two arrays:

// array1 = [1, 2, 3, 4]
// array2 = [3, 4, 5, 6]
// The intersection would be [3, 4], since these are the only elements present in both arrays.

// Approach
// Using a Set:

// Convert one of the arrays to a Set, which allows for O(1) average-time complexity for lookups.
// Iterate through the second array, checking if each element is present in the Set.
// If present, add it to the result array (to ensure uniqueness, you can also convert the result array to a Set before returning).
// Nested Loops:

// Iterate through each element of the first array.
// For each element, iterate through the second array to check for a match.
// This approach has O(n * m) time complexity, where n and m are the lengths of the two arrays.
// Using Filter and Includes:

// Use the filter method on one array and check if elements exist in the other array using includes.
// This approach is more readable but has a higher time complexity compared to using a Set.


function intersection(array1, array2) {
    // Step 1: Convert array2 to a Set for fast lookups
    const setArray2 = new Set(array2);
    // Step 2: Initialize a Set to keep track of added elements
    const addedElements = new Set();

    // Step 3: Iterate through array1
    for (const element of array1) {
        // Step 4: Check if the element exists in setArray2
        if (setArray2.has(element)) {
            addedElements.add(element); // Mark this element as added
        }
    }

    // Step 5: Return the result array
    return [...addedElements];
}

// Example Usage
// Here’s how you can test the function:

// javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(intersection(array1, array2)); // Output: [4, 5]