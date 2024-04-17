const isFirstWord = (string, word) => {
  return word === string.split(" ")[0];
};
console.log(isFirstWord("Hello world", "Hello"));
