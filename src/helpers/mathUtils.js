const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPerfectNumber = (num) => {
  if (num <= 1) return false;

  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

const isArmstrong = (num) => {
  if (num < 0) return false;
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

const getProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

const getDigitSum = (num) => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
};

module.exports = {
  isPrime,
  isPerfectNumber,
  getProperties,
  getDigitSum,
};
