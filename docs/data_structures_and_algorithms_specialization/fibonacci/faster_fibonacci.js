const fibonacciNumbers = (n) => {
  let numbers = [0, 1];

  for (let i = 2; i < n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }

  return numbers;
};

console.log(fibonacciNumbers(10));