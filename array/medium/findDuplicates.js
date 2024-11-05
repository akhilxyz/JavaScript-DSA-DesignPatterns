
// Problem: Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (where n is the size of the array), 
// find all the elements that appear twice in this array. You need to solve this problem without using extra space 
// and in O(n) time complexity.

// NOTE :: don't work with negative numbers
function findDuplicates(nums) {
    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            duplicates.push(Math.abs(nums[i]));
        } else {
            nums[index] = -nums[index];
        }
    }
    return duplicates;
}


// Test cases
console.log(findDuplicates([1, 2, 3, 4, 5])); // Output: []
console.log(findDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // Output: [1, 2, 3, 4]
console.log(findDuplicates([5, 6, 6, 7, 8, 8, 9])); // Output: [6, 8]
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 6, 7, 5])); // Output: [1, 5]
console.log(findDuplicates([1])); // Output: []
console.log(findDuplicates([2, 2, 2, 2])); // Output: [2]
console.log(findDuplicates([10, 11, 12, 13, 10])); // Output: [10]
console.log(findDuplicates([3, 5, 3, 7, 9, 12, 7, 10, 5, 2, 1])); // Output: [3, 5, 7]
console.log(findDuplicates([])); // Output: []


// Alternate : but space complexity is 0(n)
// NOTE :: work with negative numbers
function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = [];

    for (const num of nums) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }

    return duplicates;
}


// Approach
// Since 1 ≤ a[i] ≤ n, we can use the values in the array to mark indices as visited. Here’s how it works:

// Use Index Marking: For each number num in the array, go to index |num| - 1 (using the absolute value of num to handle cases 
// where we’ve already marked it negative). Flip the sign of the number at that index to mark it as visited.
// Detect Duplicates: If we encounter an index where the number is already negative, it means the index has been visited before,
//  so the number num is a duplicate.
// Restore the Array (Optional): If you need the original array after finding duplicates, you can loop through
//  and reset the negative values back to positive.
// This approach uses the array itself to keep track of visited numbers without requiring additional space.