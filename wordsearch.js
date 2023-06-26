// search for words horizontally or vertically in an array of arrays
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  }
  let transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word)) return true
  }
  return false
}

// function to transpose the array of arrays
const transpose = function(matrix) {
  const array = [];
  for (let row = 0; row < matrix[0].length; row++) {
    array.push([]);
    for (let col = 0; col < matrix.length; col++) {
      array[row].push(matrix[col][row]);
    }
  }
  return array;
};


module.exports = wordSearch