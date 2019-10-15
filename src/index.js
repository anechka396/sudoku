module.exports = function solveSudoku(matrix) {
  // your solution
  var x = 0, y = 0;
  var possibilities = {}
  
  if(isFinished(matrix)) {
	  return matrix;
  } else {
	  for(var i =0; i < 9; i++) {
		  var j = matrix[i].indexOf(0);
		  if(j != -1) {
			  x = i;
			  y = j;
			  break;
		  }
	  }
	  
	  possibilities = possibleEntries(matrix, x, y);
	  for (let possibility of possibilities) {
		  matrix[x][y] = possibility;
		  solveSudoku(matrix);
		  if(isFinished(matrix)) return matrix;
		  matrix[x][y] = 0;
	  }
  }
}

function isFinished(matrix) {
	for(var i = 0; i < matrix.length; i++) {
		if(matrix[i].includes(0))
			return false;
	}
	return true;	
}
	
function possibleEntries(matrix, x, y) {
	var possibleEntriesArray = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	for(var i = 0; i < 9; i++){
		if(matrix[x][i] != 0) possibleEntriesArray.delete(matrix[x][i]);
		if(matrix[i][y] != 0) possibleEntriesArray.delete(matrix[i][y]);
	}
	
	var k = Math.trunc(x/3) * 3;
	var l = Math.trunc(y/3) * 3;
	
	for(var i=k; i<k+3; i++) {
		for(var j=l; j<l+3; j++) {
			if(matrix[i][j] != 0) possibleEntriesArray.delete(matrix[i][j]);
		}
	}
	return possibleEntriesArray;
}