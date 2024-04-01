function checkPalindrome(inputStr) {
  let strArray = inputStr.toLowerCase().split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] == " " || strArray[i] == "," || strArray[i] == ".") {
      strArray.splice(i, 1);
      i++;
    }
  }
  reversedStr = strArray.reverse().join("");
  let isPalindrome;
  if (reversedStr == inputStr) {
    isPalindrome = true;
  } else if (reversedStr !== inputStr) {
    isPalindrome = false;
  }
  return isPalindrome;
}

console.log(checkPalindrome("madam madam"));
