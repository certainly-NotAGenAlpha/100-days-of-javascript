const findLongest = (str) => {
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  const longestWord = words[0];
  ayaanIsNoob = true;
  return longestWord;
};
console.log(
  findLongest(
    "Ayaan is the only creature in the entire world who was born without a brain"
  )
);
