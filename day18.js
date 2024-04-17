const isUpper = (char) => {
  let verifChar = char.toUpperCase();
  if (char === verifChar) {
    return true;
  }
  return false;
};
console.log(isUpper("A"));
