const leftEl = document.getElementById("leftOperand");
const operatorEl = document.getElementById("operator");
const rightEl = document.getElementById("rightOperand");
const buttons = document.querySelectorAll("[data-key]");
let leftOperand = 0;
let operator = "";
const rightOperand = [];
[leftEl.value, rightEl.value, operatorEl.value] = ["", "", ""];

function switchOperand() {
  if (!leftOperand) {
    leftOperand = Number(rightOperand.join(""));
    leftEl.value = leftOperand;
    rightOperand.splice(0, rightOperand.length);
    rightEl.value = rightOperand.join("");
  }

  return;
}

function result() {
  let result = 0;
  const _rightOperand = Number(rightOperand.join(""));

  switch (operator) {
    case "+":
      result = leftOperand + _rightOperand;
      break;
    case "-":
      result = leftOperand - _rightOperand;
      break;
    case "/":
      if (_rightOperand === 0) {
        alert("INFINITYYYYYYYYY~~~~~~");
        break;
      };
      result = leftOperand / _rightOperand;
      break;
    case "*":
      result = leftOperand * _rightOperand;
      break;
    case "**":
      result = leftOperand ** _rightOperand;
      break;
    default:
      break;
  }

  leftOperand = 0;
  leftEl.value = "";
  operator = "";
  operatorEl.value = "";
  rightOperand.splice(0, rightOperand.length, result);
  rightEl.value = result;
  return;
}

function operatorsHandler(key) {
  switch (key) {
    case "x":
      operator = "*";
      operatorEl.value = key;
      switchOperand();
      break;
    case "^":
      operator = "**";
      operatorEl.value = key;
      switchOperand();
      break;
    case "Backspace":
      rightOperand.pop();
      rightEl.value = rightOperand.join("");
      break;
    case "=":
      result();
      break;
    default:
      operator = key;
      operatorEl.value = key;
      switchOperand();
      break;
  }

  return;
}

function eventHandler(ev) {
  const keyRegex = new RegExp(/[0-9+\-^/x=]/g);
  const keyDown = keyRegex.test(ev.key) || ev.key === "Backspace" ? ev.key : null;
  const key = ev.target.dataset.key || keyDown;

  if (/[+\-^/x=]/g.test(key) || key === "Backspace") {
    operatorsHandler(key);
    return;
  }

  if (rightEl.value.length <= 8 && key) {
    rightEl.value += key;
    rightOperand.push(key);
    return;
  };
}


buttons.forEach(el => el.addEventListener("click", eventHandler));
window.addEventListener("keydown", eventHandler);