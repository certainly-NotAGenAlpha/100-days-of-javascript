const findLongest = (str) => {
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  const longestWord = words[0];
  return longestWord;
};
console.log(
  findLongest(
    "Ayaan is the only person in the entire world who was born without a brain"
  )
);
