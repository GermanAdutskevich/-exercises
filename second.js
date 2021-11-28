// exercise 1

let a = 0;
let array = [];

while (a < 10) {
  array.push(prompt("Write name of city:"));
  console.log(a);
  a++;
}

let city = prompt("Write your city:");

let find = array.find((element) => (element = city));

if (city === find) {
  console.log("I know your city!!!");
} else {
  console.log("I don't know :((");
}

// exercise 2

let cards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function allMoney() {
  let card = prompt("Which card do you choose?");

  if (card > 0 && card < 10) {
    let money = prompt("How much money do you give?");
    if (money >= -1000 && money <= 1000) {
      cards[card] += Number(money);
      allMoney();
    } else {
      allMoney();
    }
  }
}

allMoney();

let sum = cards.reduce((a, b) => a + b);
console.log(sum);
console.log("v summe na vseh kartah " + sum + ".");

// exercise 3

let array = [];
let star = "*";
let space = " ";

function centredThing() {
  let oddNumber = prompt("Enter number...");
  if (oddNumber % 2 === 1 && array.length !== 20) {
    array.push(oddNumber);
    centredThing();
  } else {
    let copy = [...array];
    let maxValue = copy.sort((a, b) => a - b)[copy.length - 1];
    array.map((item) =>
      console.log(space.repeat((maxValue - item) / 2) + star.repeat(item))
    );
  }
}

centredThing();

// exercise 4

let array = [1, 3, 5, 7];

function reverseList(arr) {
  return arr.reverse();
}

console.log(reverseList(array));

//exercise 5

function numberOfWords(string) {
  let empty = [];
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 65 && string.charCodeAt(i) < 122) {
      empty.push(string[i]);
    } else {
      empty.push(" ");
    }
  }
  return empty
    .join("")
    .split(" ")
    .filter((word) => word.length > 0).length;
}

console.log(numberOfWords("hhs 123s2 12@#$"));

// exercise 6

function longestWord() {
  let line = prompt("Write a line");
  let longest = line.split(" ").sort((a, b) => a.length - b.length);
  return longest[longest.length - 1];
}

console.log(longestWord());

// exercise 7

function greet() {
  console.log("Hello World");
}

greet();
