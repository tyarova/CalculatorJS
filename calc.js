
var keys = document.querySelector('.calculationKeyboard');

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  keys.addEventListener('click', (event)=>{
      let val = event.target.value;
    if (event.target.classList.contains('number')) {
        inputNumber(val);
        console.log(calculator);
        updateDisplay();
        return;
      }
      if (event.target.classList.contains('operator')) {
        calculate(val);
        console.log(calculator);
        updateDisplay();
        return;
      }
      if (event.target.classList.contains('dot')) {
        inputDot(val);
        updateDisplay();
        return;
      }
      if (event.target.classList.contains('clr')) {
        clearDisplay();
        updateDisplay();
        return;
      }

  });

  function updateDisplay() {
    let display = document.form[0];
    display.value = calculator.displayValue;
  };

  let performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };

  function calculate(nextOperator) {
    let { firstOperand, displayValue, operator } = calculator;
    let inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
    
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
      }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }

  function inputNumber(num) {
      let { displayValue, waitingForSecondOperand } = calculator;
      if (waitingForSecondOperand === true) {
        calculator.displayValue = num;
        calculator.waitingForSecondOperand = false;
      } else {
    calculator.displayValue = displayValue === '0' ? num : displayValue + num;
  } 
};

  function inputDot(dot) {
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }

  function clearDisplay(){
    calculator.displayValue = '0';
  }


