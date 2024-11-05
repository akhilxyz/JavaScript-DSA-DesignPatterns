// Problem Statement
// Largest Consecutive Sequence: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time complexity

// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Therefore, the length is 4.


function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestSequence = 0;

    for (let num of numSet) {
        // Check if `num` is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentSequence = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentSequence += 1;
            }

            // Update longest sequence length if needed
            longestSequence = Math.max(longestSequence, currentSequence);
        }
    }

    return longestSequence;
}

const nums = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums))

// Approach
// To solve this problem efficiently in O(n) time, we need to avoid sorting the array. 
// Instead, we can use a Set to store each unique number, allowing us to efficiently check if consecutive numbers are present.

// Here's the approach:

// Convert the Array to a Set:

// Using a Set removes duplicates and allows for O(1) average-time complexity checks for the presence of elements.
// Identify the Start of a Sequence:

// For each number in the array, if the number minus one (num - 1) is not in the set, it means this number could 
// be the start of a sequence. For example, if 1 is present and 0 is not, 1 might start a sequence like [1, 2, 3, 4].

// Count Consecutive Numbers:

// Once we identify a potential starting number, use a loop to count how long the sequence continues by 
// checking if the next consecutive number exists in the set.
// Update the Longest Sequence:

// Track the length of each sequence and update the maximum sequence length accordingly.
