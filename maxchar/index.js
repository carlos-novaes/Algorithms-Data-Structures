// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// The idea for this solution is to breack the string into an dictionary where the keys are the
// characters in the string and the value is the number of times they're repeated
const maxChar = str => {
   const charMap = {};
   let maxValue = 0;
   let maxChar = '';

   for (const char of str) {
      // to iterate on a string or array
      if (charMap[char]) {
         charMap[char]++;
      } else {
         charMap[char] = 1;
      }
   }

   for (const char in charMap) {
      // to iterate in an object
      if (charMap[char] > maxValue) {
         maxValue = charMap[char];
         maxChar = char;
      }
   }
   return maxChar;
};

module.exports = maxChar;
