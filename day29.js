const numberRange = (index, end) => {
  let numArray = [];
  for (let i = index; i <= end; i++) {
    numArray.push(i);
  }
  return numArray;
};

console.log(numberRange(1, 5));
