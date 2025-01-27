let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  // Prevent multiple operators in a row
  if (currentInput && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
    currentInput += operator;
    display.textContent = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

function calculate() {
  try {
    // Evaluate the expression safely
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '';
  }
}
