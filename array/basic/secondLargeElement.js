// Problem: Find the Second Largest Element
// Question:
// Write a function that takes an array of integers as input and returns the second largest unique element in the array. 
// If there is no second largest unique element (for example, if the array contains all identical elements or has fewer 
// than two unique elements), the function should return null.

// Example
// Input: [3, 5, 2, 9, 8]
// Output: 8

// Input: [4, 4, 4]
// Output: null


// Explanation
// The problem requires finding the second largest unique element in the array, which means:

// We must ensure that the elements are unique, so we ignore duplicates.
// We identify the largest and the second largest element from the unique set.
// If there are fewer than two unique elements, we cannot find a second largest, so the function should return null in that case.



// Approach
// Remove Duplicates:

// Convert the array into a unique set of elements to handle cases where duplicates might interfere with the result.
// One way to do this in JavaScript is by converting the array to a Set and back to an array.
// Edge Case Check:

// If the resulting array after removing duplicates has fewer than 2 elements, return null, as a second largest element cannot exist.
// Find the Two Largest Elements:

// Loop through the unique elements to identify the largest and second largest elements.

// Examples

function findSecondLargest(arr) {
    // Remove duplicates
    const uniqueArr = Array.from(new Set(arr));
    
    // Edge case: if fewer than 2 unique elements, return null
    if (uniqueArr.length < 2) return null;
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Find the largest and second largest in one pass
    for (let num of uniqueArr) {
        if (num > largest) {
            // Update second largest before updating largest
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            // Update second largest if it's between largest and secondLargest
            secondLargest = num;
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([3, 5, 2, 9, 8])); // Output: 8
console.log(findSecondLargest([4, 4, 4]));       // Output: null
console.log(findSecondLargest([-1, -2, -3, -4])); // Output: -2
console.log(findSecondLargest([10, 5]));          // Output: 5
console.log(findSecondLargest([5]));              // Output: null


// Suggested Approach
// Convert to Unique Array: Use new Set(arr) to create a set, then convert it back to an array with Array.from.
// Sort and Retrieve: Sort the unique array in descending order and return the second element.
// Alternative Approach (without sorting):
// Traverse the unique array once to find the largest element.
// Traverse again to find the second largest element by ignoring the largest one.
