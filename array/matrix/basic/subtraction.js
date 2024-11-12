
// Problem: Matrix Subtraction
// Given two matrices of the same size, perform matrix subtraction. In matrix subtraction, 
// we subtract each element of the second matrix from the corresponding element of the first matrix.


const matrixA = [
                [3, 8],
                [4, 6]
                     ]       

const matrixB = [
                [1, 5],
                [2, 3]
                     ]

// Result Matrix:
        //   [
        //    [2, 3],
        //    [2, 3]
        //          ]

// Explanation: Each element in the result matrix is calculated as:

// Result[0][0] = MatrixA[0][0] - MatrixB[0][0] = 3 - 1 = 2
// Result[0][1] = MatrixA[0][1] - MatrixB[0][1] = 8 - 5 = 3
// Result[1][0] = MatrixA[1][0] - MatrixB[1][0] = 4 - 2 = 2
// Result[1][1] = MatrixA[1][1] - MatrixB[1][1] = 6 - 3 = 3
// Approach
// Initialize an Empty Result Matrix: Create a matrix of the same size as Matrix A and Matrix B to store the results.
// Loop Through Rows and Columns: For each element, subtract the corresponding element in Matrix B from Matrix A 
// and store the result in the Result matrix.
// Return the Result Matrix: Once all elements have been subtracted, return the result matrix.


/**
 * Perform matrix subtraction for two matrices of the same size.
 *
 * @param {number[][]} matrixA - The first matrix.
 * @param {number[][]} matrixB - The second matrix.
 * @returns {number[][]} The resulting matrix after subtraction.
 */
function subtractMatrices(matrixA, matrixB) {
    // Initialize an empty result matrix with the same dimensions as matrixA and matrixB
    
    // Loop through each row
    // Loop through each column in the current row
    
      // Subtract the elements and store in result matrix
    
    // Return the result matrix

    const row = matrixA.length ;
    const col = matrixA[0].length ;
    const resultMatrix = Array.from({length : row}, () =>  Array(col).fill(0));

    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col ; j++) {
            resultMatrix[i][j] = matrixA[i][j] - matrixB[i][j]
        }
    }
    return resultMatrix;
  }
  
console.log(subtractMatrices(matrixA, matrixB));