const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(inputWord) {
  let numberOfVowels = new Number();
  for (let i = 0; i < inputWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputWord[i] == vowels[j]) {
        numberOfVowels++;
      }
    }
  }
  return numberOfVowels;
}

console.log(countVowels("Amaan"));
