// --- #1 ---
function sumBeforeMin(arr) {
  if (arr.length === 0) return 0;

  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  let sum = 0;
  for (let i = 0; i < minIndex; i++) {
    sum += arr[i];
  }

  return sum;
}
const numbers = [3.5, 2.1, 4.7, 1.2, 5.6];
console.log(sumBeforeMin(numbers)); // 10.3 (3.5 + 2.1 + 4.7)

// --- #2 ---
function minDiagonalSum(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const diagonalSums = {};

  for (let col = 0; col < numCols; col++) {
    let sum = 0;
    for (let i = 0, j = col; i < numRows && j < numCols; i++, j++) {
      sum += matrix[i][j];
    }
    diagonalSums[`0-${col}`] = sum;
  }

  for (let row = 1; row < numRows; row++) {
    let sum = 0;
    for (let i = row, j = 0; i < numRows && j < numCols; i++, j++) {
      sum += matrix[i][j];
    }
    diagonalSums[`${row}-0`] = sum;
  }

  let minSum = Infinity;
  for (const key in diagonalSums) {
    if (diagonalSums[key] < minSum) {
      minSum = diagonalSums[key];
    }
  }

  return minSum;
}

// Пример использования функции
const matrix = [
  [1.2, 2.3, 3.4],
  [4.5, 5.6, 6.7],
  [7.8, 8.9, 9.0],
  [10.1, 11.2, 12.3],
];

console.log(minDiagonalSum(matrix));
