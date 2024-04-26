const findFactorial = (num) => {
  var factorial = num;
  for (let i = num - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

console.log(findFactorial(5));
