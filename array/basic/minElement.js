// Problem Statement: Find Minimum Element
// Task: Write a function that takes an array of numbers and returns the smallest number in that array.

// Input:
// An array of numbers (e.g., [3, 1, 4, 1, 5, 9, 2, 6]).
// Output:
// The smallest number in the array (e.g., 1 for the above input).

function findMinimum(arr) {
    // Step 1: Initialize minimum to the first element of the array
    let min = arr[0];

    // Step 2: Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // Step 3: Update min if a smaller element is found
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Step 4: Return the minimum value found
    return min;
}

// Example usage
console.log(findMinimum([3, 1, 4, 1, 5, 9, 2, 6])); // Output: 1


// Edge Cases:
// If the array is empty, you should decide how to handle it (e.g., return null, throw an error, etc.).
// If the array contains only one element, that element should be returned as the minimum.
