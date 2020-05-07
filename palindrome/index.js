// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution 1
const palindrome = str => {
   return str === reverse(str);
};

const reverse = str => {
   return str
      .split('')
      .reverse()
      .join('');
};

module.exports = palindrome;
