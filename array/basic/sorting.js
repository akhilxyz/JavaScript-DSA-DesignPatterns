// Problem: Sort an Array
// Description:
// Write a function that takes an array of numbers and sorts it in ascending order. 
// The function should not use any built-in sorting methods.

// Input:

// An array of numbers (e.g., [5, 3, 8, 1, 2]).
// Output:

// A new array containing the sorted numbers in ascending order (e.g., [1, 2, 3, 5, 8]).
// Explanation:

// Sorting an array means arranging its elements in a specific order, in this case, from the smallest to the largest. 
// There are various algorithms to sort an array, such as:

// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort

// For this problem, we will implement a simple sorting algorithm, such as Bubble Sort or Selection Sort,
// to demonstrate the sorting process without relying on built-in functions.

function sortArray(arr) {
    // Your code here
    // bubble sort implementation
    let n = arr.length
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n ; j ++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

// Example usage:
const numbers = [5, 3, 8, 1, 0, 2, -1];
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]


// Suggested Approach:
// Choose a Sorting Algorithm: Decide on a simple algorithm like Bubble Sort for this exercise.

// Implement the Algorithm:
// For Bubble Sort:
// Iterate through the array multiple times.
// Compare each pair of adjacent elements.
// Swap them if they are in the wrong order.
// Repeat this process until no more swaps are needed.
// Return the Sorted Array: After sorting, return the newly sorted array.
