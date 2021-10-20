// exercise 1

function setAlarm(employed, vacation) {
  let result;
  if (employed === true && vacation === false) {
    result = true;
  } else {
    result = false;
  }

  alert(result);
}

setAlarm(true, false);

// exercise 2

function YourFutureAge(BirthYear, AnotherYear) {
  let age = AnotherYear - BirthYear;
  if (age > 1) {
    alert("You are" + " " + age + " " + "years old");
  } else if (age == 0) {
    alert("You were born this very year!");
  } else {
    age = BirthYear - AnotherYear;
    if (age > 1) {
      alert("You will be born in" + " " + age + " " + "years");
    } else {
      alert("You will be born in 1 year");
    }
  }
}

YourFutureAge(2005, 2025);
