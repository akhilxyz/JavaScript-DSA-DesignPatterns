// Problem Statement: Array Rotation

// Question:
// Write a function that takes an array and a number of steps as input and rotates the array to the right by that number of steps. 
// The rotation should be done in such a way that each element in the array is shifted to the right by the specified number of steps, 
// and the elements that fall off the end of the array should wrap around to the beginning.

// Example:

// rotateArray([1, 2, 3, 4, 5], 2); 
// Output: [4, 5, 1, 2, 3]

// rotateArray([10, 20, 30, 40, 50], 3); 
// Output: [30, 40, 50, 10, 20]

// Explanation
// When rotating an array to the right:

// Each element is moved to the right by the specified number of steps.
// Elements that exceed the array length wrap around to the start of the array.
// If the number of steps is greater than the length of the array, it can be optimized by taking the modulus of the length.

function rotateArray(arr, steps) {
    const n = arr.length;
    // Handle cases where steps is greater than the array length
    steps = steps % n;

    // Helper function to reverse a portion of the array
    const reverse = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first `steps` elements
    reverse(0, steps - 1);
    // Reverse the remaining elements
    reverse(steps, n - 1);

    return arr; // Return the rotated array
}


// Approach Suggestions
// Use Slicing:

// Calculate the effective number of steps by taking steps % arr.length to avoid unnecessary rotations.
// Split the array into two parts:
// The part that will move to the front.
// The part that will stay at the end.
// Concatenate the two parts to get the rotated array.
// In-Place Rotation (for optimization):

// Reverse the entire array.
// Reverse the first steps elements.
// Reverse the remaining elements.
// This approach requires more thought but is efficient in terms of space.
// Using a Loop (less efficient):

// For each step, move the last element to the front of the array. This is straightforward but less efficient for larger arrays.