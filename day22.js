const findMedian = (array) => {
  if (array.length % 2 === 0) {
    return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  } else {
    return array[Math.floor(array.length / 2)];
  }
};

console.log(findMedian([3, 4, 5, 6, 7]));
