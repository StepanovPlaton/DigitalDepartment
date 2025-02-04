// --- #1 ---
function productOfTwoMax(a, b, c) {
  let max1, max2;

  if (a >= b && a >= c) {
    max1 = a;
    max2 = Math.max(b, c);
  } else if (b >= a && b >= c) {
    max1 = b;
    max2 = Math.max(a, c);
  } else {
    max1 = c;
    max2 = Math.max(a, b);
  }

  return max1 * max2;
}

// Example usage:
console.log(productOfTwoMax(3, 5, 2)); // Outputs: 15
console.log(productOfTwoMax(7, 1, 4)); // Outputs: 28

// --- #2 ---
const introduce = (name, rank = "soldier") => `Name: ${name}, Rank: ${rank}`;

// Example usage:
console.log(introduce("Max", "admiral")); // Outputs: Name: Max, Звание: admiral
console.log(introduce("Bob")); // Outputs: Name: Bob, Звание: soldier

// --- #3 ---
const executeFunction = (func, ...args) => func(...args);

// Example usage:
const add = (a, b) => a + b;
const result = executeFunction(add, 5, 3);
console.log(result); // Outputs: 8

// --- #4 ---
const getPowerFunction = (number) =>
  number % 2 === 0 ? (n) => n ** 2 : (n) => n ** 3;

// Example usage:
const squareFunction = getPowerFunction(4);
console.log(squareFunction(4)); // Outputs: 16
const cubeFunction = getPowerFunction(3);
console.log(cubeFunction(3)); // Outputs: 27

// --- #5 ---
const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

// Example usage:
console.log(factorial(5)); // Outputs: 120
console.log(factorial(0)); // Outputs: 1
