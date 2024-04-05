const findAverage = (array) => {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / array.length;
  const finalAverage = average.toFixed(2);
  return finalAverage;
};
console.log(findAverage([5, 10, 2, 8]));
