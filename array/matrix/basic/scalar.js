// Problem: Scalar Multiplication
// Question:
// Given a matrix (2D array) and a scalar value, write a function to multiply each element in the matrix by the scalar value 
// and return the resulting matrix.

// Explanation:
// In scalar multiplication, each element of the matrix is multiplied by a constant (scalar). For example, 
// if the scalar is 3 and the matrix is:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   ];

// then the resulting matrix will be:
//    [  
//     [3, 6, 9],
//     [12, 15, 18]
//    ]

/**
 * Multiplies each element in the matrix by the given scalar.
 * 
 * @param {number[][]} matrix - The input 2D array (matrix) of numbers.
 * @param {number} scalar - The scalar value to multiply each matrix element by.
 * @returns {number[][]} - The resulting matrix after scalar multiplication.
 */
function scalarMultiply(matrix, scalar) {
    const row = matrix.length;
    const col = matrix[0].length;
  
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        matrix[i][j] = matrix[i][j] * scalar;
      }
    }
    return matrix;
  }
  
  // Driver code
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  const result = scalarMultiply(matrix, 3);
  
  console.log("result", result);
  

// Approach:
// Loop Through Rows: Use a loop to go through each row of the matrix.
// Loop Through Columns: For each row, iterate through each element (column) and multiply it by the scalar.
// Store Results: Store the updated values in a new matrix or modify the original matrix directly.
// Return the Result: After updating all elements, return the modified matrix.
