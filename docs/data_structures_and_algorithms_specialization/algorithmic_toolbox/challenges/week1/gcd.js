const findGCD = (numberOne, numberTwo) => {
  let rest = numberOne % numberTwo;

  while (rest !== 0) {
    numberOne = numberTwo;
    numberTwo = rest;
    rest = numberOne % numberTwo;
  }

  return numberTwo;
};

console.log(findGCD(240, 140));
