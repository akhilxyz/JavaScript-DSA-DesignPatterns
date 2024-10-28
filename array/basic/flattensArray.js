// Problem Statement:
// Write a function that takes a nested array (an array that may contain other arrays as its elements) and 
// flattens it into a single-level array. 
// For example, given the input [[1, 2], [3, [4, 5]], 6], 
// the output should be [1, 2, 3, 4, 5, 6].

// Explanation
// Flattening an array means converting a multi-dimensional array into a one-dimensional array. 
// This is often necessary in scenarios where you want to process or manipulate the data in a simpler format. 
// In JavaScript, you can achieve this by recursively traversing the array and pushing all elements into a new array.

// Approach
// Base Case: If the current element is not an array, add it to the result array.
// Recursive Case: If the current element is an array, call the flatten function recursively on that element.
// Combine Results: Concatenate the results of each recursive call into a single array.

// Suggestions
// Consider using the built-in Array.isArray() method to check if an element is an array.
// Use the reduce method for a more functional approach, or you can use a simple for loop.
// Be mindful of deeply nested arrays and ensure your function can handle various levels of nesting.


function flattenArray(nestedArray) {
    let result = [];

    for (const element of nestedArray) {
        if (Array.isArray(element)) {
            // Spread the result of the recursive flattening directly into the result
            result.push(...flattenArray(element));
        } else {
            // If it's not an array, push the element to the result
            result.push(element);
        }
    }

    return result;
}

// Example usage:
const input = [[1, 2], [3, [4, 5]], 6];
const flattened = flattenArray(input);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]


// Explanation of the Loop Method
// In the loop method, when an array is encountered, the function recursively flattens 
// that array and stores the result in a temporary variable (flattened).
// A second loop iterates over this flattened result, pushing each item into the result array.
