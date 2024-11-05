// Problem :
// 3 Sum: Given an array of integers, find all unique triplets that sum up to zero.
// Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums =    
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation:

// The unique triplets are:
// - [-1, 0, 1] (since -1 + 0 + 1 = 0)
// - [-1, -1, 2] (since -1 + -1 + 2 = 0)

// Approach
// Sorting:

// First, sort the array. Sorting allows us to use a two-pointer approach for the inner loop and helps in
// easily avoiding duplicates.
// Iterate through the array:

// Use a for-loop to iterate through each element in the array.
// Treat each element as the "first" element in the triplet.
// Two-pointer approach:

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation:

// The unique triplets are:
// - [-1, 0, 1] (since -1 + 0 + 1 = 0)
// - [-1, -1, 2] (since -1 + -1 + 2 = 0)

    function threeSum(nums) {
        nums.sort((a, b) => a - b); // Step 1: Sort the array
        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    // Move left and right to the next unique values
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }

const nums = [-2, 0, 1, 1, 2];
console.log(findTriplets(nums));

// For each element at index i, set two pointers:
// left to i + 1 (start just after the i index).
// right to len(nums) - 1 (the end of the array).
// Check the sum of nums[i] + nums[left] + nums[right]:
// If the sum is zero, record the triplet and adjust both left and right to find new triplets.
// If the sum is less than zero, increment the left pointer to increase the sum.
// If the sum is greater than zero, decrement the right pointer to decrease the sum.
// Skip duplicates for both the left and right pointers to ensure only unique triplets are added.
// Return the result:

// After iterating through all elements, return the list of unique triplets.
