const fibonacciNumbers = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2);
  }
};

console.log(fibonacciNumbers(10));
