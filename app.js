let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

function add() {
  let add = Number(num1.value) + Number(num2.value);
  result.innerHTML = add;
}
function sub() {
  let sub = Number(num1.value) - Number(num2.value);
  result.innerHTML = sub;
}
function mult() {
  let mult = Number(num1.value) * Number(num2.value);
  result.innerHTML = mult;
}
function div() {
  let div = Number(num1.value) / Number(num2.value);
  result.innerHTML = div;
}

// Add buttons for Area and Perimeter and create the logic for both buttons
