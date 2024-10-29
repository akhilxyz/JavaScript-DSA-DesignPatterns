// Problem Statement
// Rotate an Array Left:
// Write a function that rotates an array to the left by a given number of steps. For example, given an array [1, 2, 3, 4, 5] 
// and steps = 2, the result should be [3, 4, 5, 1, 2].

// Explanation
// A left rotation shifts each element of the array to the left by one position.
// When an element is shifted past the beginning of the array, it wraps around to the end.
// For instance, if we perform a left rotation by 2 on the array [1, 2, 3, 4, 5], the first two elements, 
// 1 and 2, will be moved to the end of the array, resulting in [3, 4, 5, 1, 2].

// Approach
// Normalize Steps:

// If steps is greater than the array length, use modulo (steps % arr.length) to reduce the steps. For example, rotating an array of length 5 by 7 steps is the same as rotating it by 2 steps (7 % 5 = 2).
// Slice and Concat:

// Split the array into two parts:
// Elements from the beginning to steps.
// Elements from steps to the end.
// Concatenate the two parts in reverse order to achieve the rotation.
// Return the Result:

// Return the rotated array.

function rotateLeft(arr, steps) {
    const n = arr.length;
    // Normalize steps to handle cases where steps >= n
    steps = steps % n;

    const rotate = (start, end) => {
        while (start < end) {
            // Swap elements
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    // Reverse the first part
    rotate(0, n - 1);
    // Reverse the second part
    rotate(0, n - steps - 1);
    // Reverse the last part
    rotate(n - steps, n - 1);

    return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
console.log(rotateLeft([1, 2, 3, 4, 5], 5)); // Output: [1, 2, 3, 4, 5]
console.log(rotateLeft([1, 2, 3, 4, 5], 0)); // Output: [1, 2, 3, 4, 5]
console.log(rotateLeft([1, 2, 3, 4, 5], 7)); // Output: [3, 4, 5, 1, 2]


// Suggestions
// Edge Cases:
// If steps is 0 or a multiple of arr.length, the result should be the original array.
// If arr is empty, the function should return an empty array.
// Testing:
// Test with different step values, including large numbers and zero.
// Test with arrays of various lengths, including single-element and empty arrays.
// This approach runs in 
// 𝑂(𝑛)
// O(n) time complexity and doesn’t require extra space beyond the slices, making it efficient.