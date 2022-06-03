const readline = require("readline");

const maxPairwiseProdFaster = (numbers) => {
  let maxOne = parseInt(numbers[0]);
  let maxTwo = parseInt(numbers[1]);

  if (maxOne > maxTwo) {
    const temp = maxOne;
    maxOne = maxTwo;
    maxTwo = temp;
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNum = parseInt(numbers[i]);
    if (maxTwo < currentNum) {
      maxOne = maxTwo;
      maxTwo = currentNum;
    } else if (maxOne < currentNum) {
      maxOne = currentNum;
    }
  }

  return maxOne * maxTwo;
};

const rl = readline.createInterface(process.stdin, process.stdout);

rl.on("line", (_) => {
  rl.on("line", (data) => {
    const numbers = data.split(" ");
    console.log(maxPairwiseProdFaster(numbers));
    rl.close();
  });
});
