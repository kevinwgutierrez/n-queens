/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solutionOutput = [];
  // create new board with input n
  var solution = new Board({ n: n });
  // loop through keys and access corresponding arrays
  for (var i = 0; i < n; i++) {
    // create variable for current row
    var row = solution.get(i);
    console.log(row);
    // empty array to push to
    var currentRow = [];
    // loop through columns in the arrays
    for (var j = 0; j < n; j++) {
      var currentArray = solution.i;
      // change current element in array to a 1
      row[j] = 1;
      console.log(row[j]);
      // if making the element a 1 makes a conflict
      if (solution.hasAnyRooksConflicts.call(solution)) {
        // change back to a zero
        row[j]--;
      }
      // add current row/col spot to currentRow
      currentRow.push(row[j]);
    }
    // add current row to solution output
    solutionOutput.push(currentRow);
  }

  console.log("Single solution for " + n + " rooks:", JSON.stringify(solution));
  return solutionOutput;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  // create a counter variable
  var counter = 0;
  // create a new board
  var board = new Board({ n: n });
  var boardCheck = function() {
    // loop through Board
    for (var i = 0; i < n; i++) {
      // grab current row
      var row = this.get(i);
      if ()
    }
  };
  console.log("Number of solutions for " + n + " rooks:", solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log(
    "Single solution for " + n + " queens:",
    JSON.stringify(solution)
  );
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log("Number of solutions for " + n + " queens:", solutionCount);
  return solutionCount;
};
