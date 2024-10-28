// Problem: Reverse an Array

// Write a function that takes an array and returns a new array that contains all the elements of the original array, but in reverse order.

// Example
// Input:
// [1, 2, 3, 4, 5]

// Output:
// [5, 4, 3, 2, 1]

// Explanation
// When reversing an array, each element is swapped with the element on the opposite end. For instance, in the array [1, 2, 3, 4, 5], the first element 1 moves to the last position, the second element 2 moves to the second-last position, and so on, until all elements are in reverse order.


function reverseArray(arr) {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        // Swap the elements
        [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    }
    return arr;
}

// Approach
// Using a Loop: We can start from the end of the array and add each element to a new array.
// Using Built-in Methods (if allowed): Many programming languages offer a built-in reverse function.

