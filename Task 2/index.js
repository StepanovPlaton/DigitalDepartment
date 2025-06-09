function isValidCreditCard(cardNumber) {
  const digits = cardNumber.replace(/\s/g, "");

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

console.log(isValidCreditCard("5457 6238 9823 4311")); // true
console.log(isValidCreditCard("5457 6238 9323 4311")); // false
