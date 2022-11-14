// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input:

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// Output: true

function validateSudoku(board){

  const rowSet = new Set();
  const columnSet = new Set();
  const boxSet = new Set();

  for(let i = 0; i < board.length; i++){
    const row = board[i];

    for(let j = 0; j < row.length; j++){
      const rowNumber = row[j];
      const columnNumber = board[j][i];
      const boxNumber =
      board[3 * Math.floor(i / 3) + Math.floor(j / 3)] [((i * 3) % 9) + (j % 3)];

      if(rowNumber !== '.'){
        if(rowSet.has(rowNumber)) return false;
        rowSet.add(rowNumber);
        console.log('rowSet ----->', rowSet);
      }

      if(columnNumber !== '.'){
        if(columnSet.has(columnNumber)) return false;
        columnSet.add(columnNumber);
        console.log('columnSet ----->', columnSet);
      }

      if(boxNumber !== '.'){
        if(boxSet.has(boxNumber)) return false;
        boxSet.add(boxNumber);
        console.log('boxSet ---->', boxSet);
      }
    }
    rowSet.clear();
    columnSet.clear();
    boxSet.clear();
  }
  return true;

}

console.log(validateSudoku(board));
