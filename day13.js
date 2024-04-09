const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCount = new Number();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === str[i]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
};
console.log(countVowels("100 days of javascript by thapa sir"));
