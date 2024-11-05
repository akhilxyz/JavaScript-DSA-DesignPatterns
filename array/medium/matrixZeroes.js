// Problem: Set Matrix Zeroes

// Given an m x n matrix, if an element is 0, set its entire row and column to 0. The goal is to do this in place, 
// meaning you should not use extra space for another matrix. However, you can use a constant amount of extra space.

// Example
// Input
// let matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
//   ];
  
//   Output:
//   [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1]
//   ]
  

function setZeroes(matrix) {
    let isFirstRowZero = false;
    let isFirstColZero = false;
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Check if the first row has any zero
    for (let j = 0; j < cols; j++) {
      if (matrix[0][j] === 0) {
        isFirstRowZero = true;
        break;
      }
    }
  
    // Check if the first column has any zero
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) {
        isFirstColZero = true;
        break;
      }
    }
  
    // Use first row and column as markers
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Set zeroes based on markers
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Zero the first row if needed
    if (isFirstRowZero) {
      for (let j = 0; j < cols; j++) {
        matrix[0][j] = 0;
      }
    }
  
    // Zero the first column if needed
    if (isFirstColZero) {
      for (let i = 0; i < rows; i++) {
        matrix[i][0] = 0;
      }
    }
  }
  

// Approach
// First Pass (Mark Rows and Columns): Traverse the matrix and mark the rows and columns that should be zeroed. 
// Instead of using additional memory to store which rows and columns to zero out, use the first row and first column 
// of the matrix as markers. If matrix[i][j] is 0, set matrix[i][0] = 0 (mark the row) and matrix[0][j] = 0 (mark the column).

// Second Pass (Set Zeroes): Use the markers in the first row and column to set elements in the respective rows and columns to 0.

// Handle the First Row and Column Separately: Since the first row and first column were used as markers, handle them separately 
// at the end to avoid conflicts.



// Complexity Analysis
// Time Complexity: O(m * n)
// We perform three passes over the matrix:

// First pass to set markers.
// Second pass to set zeroes based on markers.
// Final pass to update the first row and column if needed.
// Space Complexity: O(1)
// The solution uses constant space (only the two flags isFirstRowZero and isFirstColZero), meeting the requirement to use no additional data structures for marking.

// This approach is efficient and modifies the matrix in place with minimal extra space usage.