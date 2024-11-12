// Problem:
// Given two matrices, matrixA and matrixB, both of size m x n, perform matrix addition to produce a new matrix 
// resultMatrix of the same size, where each element at position (i, j) in resultMatrix is the sum of the elements 
// at position (i, j) in matrixA and matrixB.

// Example:
// If matrixA and matrixB are:

const matrixA = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]]

const matrixB = [[9, 8, 7],
                [6, 5, 4],
                [3, 2, 1]]


// resultMatrix = [[10, 10, 10],
//                 [10, 10, 10],
//                 [10, 10, 10]]


// Explanation:
// Each element in resultMatrix is obtained by adding the corresponding elements in matrixA and matrixB:

// resultMatrix[0][0] = matrixA[0][0] + matrixB[0][0] = 1 + 9 = 10
// resultMatrix[0][1] = matrixA[0][1] + matrixB[0][1] = 2 + 8 = 10
// … and so on.


function addMatrices(matrixA, matrixB) {
    // Check if both matrices have the same dimensions
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        return "Error: Matrices must be of the same size.";
    }

    const row = matrixA.length ;
    const col = matrixA[0].length ;
    const resultMatrix = Array.from({length : row} , () =>  Array(col).fill(0))

    // Logic for adding corresponding elements in matrixA and matrixB
    // ...
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j]
        } 
        // End of inner loop for column traversal
    }
    return resultMatrix;
}

console.log("addMatrices", addMatrices(matrixA, matrixB));


// Approach:

// Check if matrixA and matrixB have the same dimensions (m x n). If not, return an error message since addition is not possible.
// Initialize an empty matrix resultMatrix with the same dimensions as matrixA and matrixB.
// Traverse each element in both matrices:
// For each element (i, j), calculate resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j].
// Return the resultMatrix.