// exercise 1

function triangle() {
  let N = prompt("Please write number");
  let star = "*";
  let i;
  for (i = 1; i <= N; i++) {
    console.log(star.repeat(i));
  }
}

triangle();

// ex 2

function triangleReverse() {
  let N = prompt("Please write number");
  let star = "*";
  let i;
  for (i = N; i > 0; i--) {
    console.log(star.repeat(i));
  }
}

triangleReverse();

// ex 3


function triangleReverse2() {
  let N = prompt("Please write number");
  let star = "*";
  let i;
  let s = " ";
  let j = 0;
  for (i = N; i > 0; i--) {
    console.log(s.repeat(j) + star.repeat(i));
    j++;
  }
}

triangleReverse2();

// ex 4

function CristmasTree() {
  let N = prompt("Please write number");
  let star = "*";
  let i;
  let s = " ";
  let j = N;
  for (i = 1; i <= N; i++) {
    console.log(s.repeat(j) + star.repeat(i) + star.repeat(i - 1));
    j--;
  }
  console.log(s.repeat(N) + star.repeat(1));
}

CristmasTree();