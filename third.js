// exercise 1

function max(x, y) {
  if (x > y) {
    return x;
  } else return y;
}

let a = +prompt("введи перше число");
let b = +prompt("введи друге число");

console.log(max(a, b));

// exercise 2

function main() {
  let size = +prompt("How long array?");
  let array = [];
  for (var i = 0; i < size; i++) {
    array.push(prompt("item"));
  }
  console.log(array);
  let arrayRev = [...array].reverse();
  console.log(arrayRev);
}

main();

// exercise 3

function stringToNumber(string) {
  return +string;
}

console.log(stringToNumber("123") === 123);

function numberToString(number) {
  return number.toString();
}

console.log(numberToString(123) === "123");

// exercise 4

function likes(people) {
  if (people.length === 0) {
    return "no one likes this";
  } else if (people.length === 1) {
    return people[0] + " likes this";
  } else if (people.length === 2) {
    return people[0] + " and " + people[1] + " like this";
  } else if (people.length === 3) {
    return people[0] + ", " + people[1] + " and " + people[2] + " like this";
  } else
    return (
      people[0] +
      ", " +
      people[1] +
      " and " +
      (people.length - 2) +
      " others like this"
    );
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// exercise 5

function filter_list(array) {
  let empty = [];
  for (let a = 0; a < array.length; a++) {
    if (typeof array[a] === "number") {
      empty.push(array[a]);
    }
  }
  console.log(empty);
}

filter_list([1, 2, "sgas", true, 4, "sfafs"]);

// exercise 6

function sumMixedArray(array) {
  let zero = 0;
  for (let a = 0; a < array.length; a++) {
    zero = zero + +array[a];
  }
  console.log(zero);
}

sumMixedArray([1, 2, "2", "213", 4, "76", 5]);

// exercise 7

function basicOperations(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else return num1 / num2;
}

console.log(basicOperations("/", 2, 3));

// exercise 8

function shipArray(array) {
  let sum = 0;
  for (let a = 0; a < array.length; a++) {
    if (array[a] === true) {
      sum++;
    }
  }
  console.log(sum);
}

shipArray([true, true, false, null, undefined]);

// exercise 9

function shipArray(array1, array2) {
  let sum = 0;
  let concatArray = array1.concat(array2);
  for (let a = 0; a < concatArray.length; a++) {
    sum = sum + concatArray[a];
  }
  console.log(sum);
}

shipArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// exercise 10

function boolean(arrayOfBoolean, operator) {
  let b = [];
  for (let a = 0; a < arrayOfBoolean.length; a++) {
    if (operator === "AND") {
      b[0] = b[0] & arrayOfBoolean[a];
    } else if (operator === "OR") {
      b[0] = b[0] || arrayOfBoolean[a];
    } else b[0] = b[0] !== arrayOfBoolean[a];
  }
  console.log(b[0]);
}

boolean([true, true, false], "XOR");

// exercise 11

function sumOfCircles(num1, num2) {
  let lower = Math.min(num1, num2);
  let upper = Math.max(num1, num2);
  let empty = [];

  for (let a = lower; a <= upper; a++) {
    if (a % 5 === 0 || a % lower === 0 || a % upper === 0) {
      empty.push(a);
    }
  }
  return empty.reduce((a, b) => a + b);
}

console.log(sumOfCircles(5, 10));
