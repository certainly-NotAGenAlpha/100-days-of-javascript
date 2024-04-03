const removeDuplicate = (array) => {
  return [...new Set(array)];
};

console.log(removeDuplicate([1, 2, 2, 3, 4, 5, 5, 5, 6])); // output: [1, 2, 3, 4, 5, 6]
