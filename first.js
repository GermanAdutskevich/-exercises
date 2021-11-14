// exercise 1

const minMax = (array) => [Math.min(...array), Math.max(...array)];

console.log(minMax([2, 214, 22, 87, 92992]));

// exercise 2

const isPalindrome = (text) => text === text.split("").reverse().join("");

console.log(isPalindrome("HeH"));

// exercise 3

const findShort = (text) =>
  text.split(" ").sort((a, b) => a.length - b.length)[0];

console.log(findShort("HeH JSJSJ kasfasf"));

// exercise 4

const toInitials = (text) =>
  text
    .split(" ")
    .map((a) => a.charAt(0) + ".")
    .join("");

console.log(toInitials("HeH JSJSJ"));

//exercise 5

const sumDigits = (number) =>
  number
    .toString()
    .split("")
    .reduce((a, b) => +a + +b);

console.log(sumDigits(11123));
