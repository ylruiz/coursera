var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (input) {
  const numbers = input.split(" ");
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
});
