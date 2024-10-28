// Problem Statement: Count Occurrences
// Objective: Write a function that takes an array and a value, and returns the number of times that value appears in the array.

// Function Signature:

// function countOccurrences(arr: any[], value: any): number


// Constraints:
// The array can be of any length (including empty).
// The value can be of any type (including null or undefined).

function countOccurrences(arr, value) {
    if(arr.length === 0)  return 0;
    let count = 0; // Initialize a counter to 0
    for (let i = 0; i < arr.length; i++) { // Loop through the array
        if (arr[i] === value) { // Check if the current element matches the value
            count++; // Increment the counter
        }
    }
    return count; // Return the total count
}

// Example usage
console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
console.log(countOccurrences(['apple', 'banana', 'apple', 'orange'], 'apple')); // Output: 2
console.log(countOccurrences([true, false, true, true], true)); // Output: 3
