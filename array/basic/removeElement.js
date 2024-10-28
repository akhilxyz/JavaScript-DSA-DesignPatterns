// Problem Statement: Remove Elements

// Question:
// Write a function named removeElements that takes an array and a value as arguments. The function should return 
// a new array that contains all the elements from the original array except for those that match the specified value.


// removeElements([1, 2, 3, 4, 2, 5], 2);
// Output: [1, 3, 4, 5]
function removeElements(arr, value) {
    // Your code here
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeElements([1, 2, 3, 4, 2, 5], 2))

// Explanation
// The goal of this function is to create a new array that excludes all instances of a given value from the input array.
//  This requires iterating through the original array and checking each element against the specified value. 
//  If the element does not match the value, it should be included in the new array. 
//  This can be accomplished using various approaches, such as using a loop or higher-order functions like filter.