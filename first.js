//exersice 1


if ((age = Number(prompt("Please, tell me your age")))) {
  let sum = age + 1;
  alert("Twoj wiek" + " " + sum);
} else {
  alert(":(");
}

//exersice 2

let a = Number(prompt("First number:"));
let b = Number(prompt("Second number:"));
alert(a + b);

//exersice 3

let kilometers = Number(prompt("How much kilometers your run today?"));
if (kilometers <= 3) {
  alert("not good");
} else if (kilometers <= 20) {
  alert("GOOD");
} else {
  alert("marafon!!");
}

//exersice 4

let floor = Number(prompt("Floor number"));

if (floor < 1 || floor > 9) {
  alert("Wrong number");
}
if (floor <= 3 || floor >= 7) {
  alert("Ok");
} else {
  let password = prompt("Please, enter pin");
  if (password == 1337) {
    alert("Ok");
  } else {
    alert("WRONG");
  }
}


