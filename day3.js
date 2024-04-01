function countChar(input, char) {
  input = input.split("");
  let charAmount = new Number();
  for (let i = 0; i <= input.length; i++) {
    if (input[i] == char) {
      charAmount++;
    }
    return input[i];
  }
}
console.log(countChar("giggling", "g"));
