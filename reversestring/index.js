// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
const reverse = str => {
   return str
      .split('')
      .reverse()
      .join('');
};

//sollution 2
const reverse2 = str => {
   let reversed = '';
   for (let i = 0; i < str.length; i++) {
      reversed += str[str.length - i - 1];
   }
   return reversed;
};

const reverse3 = str => {
   let reversed = '';
   for (const char of str) {
      reversed = char + reversed;
   }
   return reversed;
};

//sollution 3
const reverse4 = str => {
   return str.split('').reduce((reversed, char) => {
      return char + reversed;
   }, '');
};

module.exports = reverse;
