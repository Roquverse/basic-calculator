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

function peri() {
  let perimeter = (Number(num1.value) + Number(num2.value)) * 2;
  result.innerHTML = perimeter;
}

function area() {
  let area = Number(num1.value) * Number(num2.value);
  result.innerHTML = area;
}

function temp() {
  let inputValue = Number(document.querySelector("#value").value);
  let cel = document.querySelector("#celsius");
  let fa = document.querySelector("#fah");

  if (cel.checked) {
    let celsiusCon = `${(inputValue * 9) / 5 + 32}°C`;
    result.innerHTML = celsiusCon;
  }
  if (fa.checked) {
    let fahCon = `${(inputValue - 32) / 1.8}°F`;
    result.innerHTML = fahCon;
  }
}
// Add buttons for Area and Perimeter and create the logic for both buttons
//  git add .
//  git commit -m "second commit"
//  git remote add origin https://github.com/Roquverse/basic-calculator.git
//  git push -u origin main
