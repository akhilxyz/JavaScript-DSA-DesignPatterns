// Problem: Intersection of Two Arrays II
// Question:

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear
//  as many times as it shows in both arrays, and you may return the result in any order.



// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Approach:
// Use a Hash Map:
// Create a hash map (object) to count the frequency of each element in nums1.
// Traverse nums2 and check if the element exists in the hash map with a count greater than 0.
// If it exists, add it to the result array and decrease the count in the map by 1.

// Steps:
// Initialize an empty hash map.
// Count the occurrences of each element in nums1 and store them in the hash map.
// For each element in nums2, check if it exists in the hash map with a positive count. If so, add it to the result and decrease the count.
// Return the result array.

function intersect(nums1, nums2) {
    const countMap = {};
    const result = [];

    // Count the occurrences of each element in nums1
    for (let num of nums1) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Check each element in nums2 against the countMap
    for (let num of nums2) {
        if (countMap[num] > 0) {
            result.push(num);
            countMap[num] -= 1;
        }
    }

    return result;
}


// Time Complexity:
// O(n + m), where n is the length of nums1 and m is the length of nums2.
// Creating the hash map takes O(n).
// Traversing nums2 to find intersections takes O(m).
// Space Complexity:
// O(min(n, m)) for the hash map, as it stores the count of elements in the smaller array (nums1).