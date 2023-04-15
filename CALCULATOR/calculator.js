let result = document.getElementById("result");

function insertChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}


const logButton = document.getElementById('log');
const display = document.getElementById('display');
logButton.addEventListener('click', () => {
  const result = Math.log(parseFloat(display.value));
  display.value = result.toFixed(2);
});

function calculate() {
  let expression = result.value;
  let resultValue = eval(expression);
  result.value = resultValue;
}
