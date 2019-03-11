document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: true, hidden: true}, {row: 1, col: 0, isMine: false, hidden: true}, {row: 2, col: 0, isMine: true, hidden: true}, {row: 3, col: 0, isMine: false, hidden: true}, 
    {row: 0, col: 1, isMine: false, hidden: true}, {row: 1, col: 1, isMine: false, hidden: true}, {row: 2, col: 1, isMine: false, hidden: true}, {row: 3, col: 1, isMine: false, hidden: true}, 
    {row: 0, col: 2, isMine: false, hidden: true}, {row: 1, col: 2, isMine: true, hidden: true}, {row: 2, col: 2, isMine: false, hidden: true}, {row: 3, col: 2, isMine: true, hidden: true}, 
    {row: 0, col: 3, isMine: false, hidden: true}, {row: 1, col: 3, isMine: true, hidden: true}, {row: 2, col: 3, isMine: false, hidden: true}, {row: 3, col: 3, isMine: false, hidden: true}, 
  ]
}

function startGame () {
  for (var i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) // assigning minecount to the surroundingMines property 
  };

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i=0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false ) {
      return;
    }
    else if (board.cells[i].isMine == false && board.cells[i].hidden == true) {
      return;
    } 
  }
  
  lib.displayMessage('You win! Woo!')
    
}


//   board.map(cell => cell.isMine === true &&  board.cells[i].isMarked === true)
  

 // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

// 1- get the array of surrounding cells
// 2- filter to only show the ones that have mines, give length of array after filtering


function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);      
  return surroundingCells.filter(cell => cell.isMine === true).length
}