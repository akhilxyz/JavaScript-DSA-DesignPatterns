
// Given a square matrix, the task is to turn it by 180 degrees.
// Note that when we rotate a matrix by 180 degree, clockwise and anticlockwise both give same results. 

// Examples: 

// Input: 1  2  3
//        4  5  6
//        7  8  9

// Output: 9  8  7
//         6  5  4
//         3  2  1


// [Better Approach] Placing elements in new matrix – O(n^2) Time and O(n^2) Space

// If we take a closer look at the examples, we can notice that we mainly need to place top-leftmost at bottom-rightmost cell 
// and second element in the top row at second last cell in the bottom row, and so on. In general, we can notice that mat[i][j] 
// needs to be placed at cell [n-i-1][n-j-1]. So, we can create a new matrix and place all the elements at their correct position.
// Finally, we copy all the elements from new matrix to the original matrix.


function rotateMatrix(mat) {
    // console.log(mat)
    const row = mat.length 
    const col = mat[0].length

    const res = Array.from({ length: row }, () => Array(col).fill(0));
    
    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col; j++) {
            res[i][j] = mat[row - i - 1 ][col - j -1]
        }
    }

    for(let i = 0 ; i < row ; i++) {
        mat[i] = res[i]
    }

    return mat
}


// Driver code
const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(mat);

console.log(rotatedMatrix);
