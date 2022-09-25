// setup
let sc = document.getElementById("string");
let ic = document.getElementById("integer");
let sfanswer = document.getElementById("sumfunction-answer");
let ifelseanswer = document.getElementById("ifelse-head-answer");

// variables
let svariable = "Amaan";
sc.innerHTML = svariable;
let ivariable = 13;
ic.innerHTML = ivariable;

// sum function
let sum_function = (n1, n2) => {
  return n1 + n2;
};

sfanswer.innerHTML = sum_function(1, 2);

// decision making
let age = 25;
if (age >= 21) {
  ifelseanswer.innerHTML = "Yes!";
} else {
  ifelseanswer.innerHTML = "No!";
}

// loops
for (let i = 1; i < 11; i++) {
  document.write(i * 5 + "<br>");
}