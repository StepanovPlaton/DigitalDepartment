function isExcess(number) {
  if (number <= 0) {
    return false;
  }

  let divisorSum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisorSum += i;
    }
  }

  return divisorSum > number;
}

const input = prompt("Enter a positive integer:");
const number = parseInt(input, 10);
if (isNaN(number) || number <= 0) {
  console.log("Please enter a valid positive integer.");
  return;
}

if (isExcess(number)) {
  console.log(`${number} is an excess number.`);
} else {
  console.log(`${number} is not an excess number.`);
}
