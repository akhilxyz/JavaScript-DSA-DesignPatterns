// Problem Statement: Sum of Array Elements
// Description: Write a function called sumArray that takes an array of numbers as input and returns the
// sum of all the elements in the array. If the array is empty, the function should return 0.

function sumArray(numbers) {
  let sum = 0; // Initialize sum to 0
  for (let number of numbers) {
    sum += number; // Add each number to sum
  }
  return sum; // Return the final sum
}

// Example usage:
console.log(sumArray([1, 2, 3])); // Output: 6
console.log(sumArray([10, 20, 30, 40])); // Output: 100
console.log(sumArray([])); // Output: 0

// Input:

// An array of numbers, e.g., [1, 2, 3, 4]

// Output:

// A single number representing the sum of all elements in the array. For example, given the input [1, 2, 3, 4],
// the output should be 10.
