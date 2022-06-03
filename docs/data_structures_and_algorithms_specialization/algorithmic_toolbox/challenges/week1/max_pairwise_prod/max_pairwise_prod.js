const readline = require("readline");

const maxPairwiseProd = (numbers) => {
  let maxOne = parseInt(numbers[0]);
  let maxOneIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    const currentNum = parseInt(numbers[i]);
    if (maxOne < currentNum) {
      maxOne = currentNum;
      maxOneIndex = i;
    }
  }

  let maxTwo = parseInt(numbers[0]);
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (maxTwo < currentNum && maxOneIndex !== i) {
      maxTwo = currentNum;
    }
  }

  return maxOne * maxTwo;
};

const rl = readline.createInterface(process.stdin, process.stdout);

rl.on("line", (_) => {
  rl.on("line", (data) => {
    const numbers = data.split(" ");
    console.log(maxPairwiseProd(numbers));
    rl.close();
  });
});
