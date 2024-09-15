let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    display.innerText = "0";
  } else {
    display.innerText = currentInput;
  }
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
}
