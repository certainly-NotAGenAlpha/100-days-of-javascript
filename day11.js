const sumOfNumbers = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
