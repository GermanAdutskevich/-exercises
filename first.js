//exercise 1

function stars() {
  let a = 0;
  while (a < 10) {
    console.log("*");
    a++;
  }
}

console.log(stars());

function stars() {
  let a = prompt("How much stars you want to see?");
  while (a > 0) {
    console.log("*");
    a--;
  }
}

stars();

function stars() {
  let a = prompt("How much stars you want to see?");
  for (let i = a; i > 0; i--) {
    console.log("*");
  }
}

stars();

//exercise 2

function numbers() {
  let N = prompt("Please write number");
  for (var i = 1; i <= N; i++) {
    console.log(i);
  }
}

numbers();

function numbers() {
  let N = prompt("Please write number");
  let i = 1;
  while (i <= N) {
    console.log(i);
    i++;
  }
}

numbers();

function numbersReverse() {
  let N = prompt("Please write number");
  for (let i = N; i >= 1; i--) {
    console.log(i);
  }
}

numbersReverse();

function evenNumbers() {
  let N = prompt("Please write number");
  for (var i = 2; i <= N; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers();

function square() {
  let N = prompt("Please write number");
  let star = "*";
  for (var i = 1; i <= N; i++) {
    console.log(star.repeat(N));
  }
}

stars();
