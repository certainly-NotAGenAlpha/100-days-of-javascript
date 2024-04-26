const repeatString = (str, count) => {
  let returnStr = str;
  for (let i = 1; i < count; i++) {
    returnStr += str;
  }
  return returnStr;
};

console.log(repeatString("Abc", 5));
