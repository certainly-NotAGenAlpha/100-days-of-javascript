const truncateString = (str, count) => {
  let returnStr = "";
  for (let i = 0; i < count; i++) {
    returnStr += str[i];
  }
  returnStr += "...";
  return returnStr;
};

console.log(truncateString("im a gawker majestic dood 6000", 10));
