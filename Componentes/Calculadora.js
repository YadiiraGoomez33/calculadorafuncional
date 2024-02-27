import { useState } from 'react';

const useCalculatorLogic = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
 
  const handleInput = (input) => {
    if (input === 'C') {
      setDisplayValue('0');
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    } else if (input === '.') {
      if (!displayValue.includes('.')) {
        setDisplayValue(displayValue + '.');
      }
    } else if (!isNaN(input)) {
      if (waitingForSecondOperand) {
        setDisplayValue(String(input));
        setWaitingForSecondOperand(false);
      } else {
        setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
      }
    } else if (['+', '-', '*', '/'].includes(input)) {
      const inputValue = parseFloat(displayValue);
      if (firstOperand === null) {
        setFirstOperand(inputValue);
      } else if (operator) {
        const result = evaluate();
        setFirstOperand(result);
        setDisplayValue(String(result));
      }
      setWaitingForSecondOperand(true);
      setOperator(input);
    } else if (input === '%') {
      const percentageValue = parseFloat(displayValue) / 100;
      setDisplayValue(String(percentageValue));
    } else if (input === 'CE') {
      if (displayValue.length === 1) {
        setDisplayValue('0');
      } else {
        setDisplayValue(displayValue.slice(0, -1));
      }
    } else if (input === '=') { 
      if (operator && !waitingForSecondOperand) {
        const result = evaluate();
        setFirstOperand(result);
        setDisplayValue(String(result));
        setOperator(null);
      }
    }
  };
  

  const evaluate = () => {
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        break;
    }
    return result;
  };

  return { displayValue, handleInput };
};

export default useCalculatorLogic;