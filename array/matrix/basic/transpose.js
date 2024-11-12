// Problem: Transpose of a Matrix
// Question:
// Given an m x n matrix, find the transpose of the matrix. The transpose of a matrix flips the matrix over its diagonal, 
// swapping the row and column indices of each element.

// For example, the transpose of the matrix:

//  matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
//   ]

//   result:
//   [
//     [1, 4],
//     [2, 5],
//     [3, 6]
//   ]

// Explanation:
// In the transpose of a matrix, the element at the position (i, j) in the original matrix becomes the element at (j, i) in the transposed matrix.

// For example, if we have a 2 x 3 matrix:
  


// Approach:
// Create a new matrix of size n x m (where m is the number of rows and n is the number of columns of the original matrix).
// Iterate through each element in the original matrix.
// For each element located at (i, j) in the original matrix, place it in position (j, i) in the transposed matrix.
// Return the transposed matrix.


/**
 * Transposes the given matrix.
 *
 * @param {number[][]} matrix - The input matrix to be transposed.
 * @return {number[][]} - The transposed matrix.
 */
function transposeMatrix(matrix) {
    // Initialize the transposed matrix of size n x m (where m x n is the size of the original matrix)
    
    // Iterate through each element of the original matrix
      // Place the element at (i, j) in the original matrix to (j, i) in the transposed matrix
  
    // Return the transposed matrix

    const row = matrix.length;
    const col = matrix[0].length;

    const resultMatrix = Array.from({length : col} , () => Array(row).fill(0)) ;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col ; j++){
            resultMatrix[j][i] = matrix[i][j]
        }  
        // end inner loop for j  // end outer loop for i  // end of transposing the matrix  // end of function transposeMatrix
    }

    return resultMatrix
  }
  

  const matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  console.log(transposeMatrix(matrix));
  // Expected output:
  // [
  //   [1, 4],
  //   [2, 5],
  //   [3, 6]
  // ]
  

// Explanation of the Code:
// Determine Dimensions: We first get the number of rows and columns of the original matrix.
// Initialize the Transposed Matrix: We create a new matrix of size cols x rows.
// Fill the Transposed Matrix: Using nested loops, we place each element from position (i, j) 
// in the original matrix to (j, i) in the transposed matrix.
// Return the Transposed Matrix: After populating, we return the transposed matrix.