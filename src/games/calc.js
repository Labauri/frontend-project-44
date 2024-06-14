import playGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomIndex = (max) => Math.floor(Math.random() * max);
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const calculateResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const randomOperator = operators[getRandomIndex(operators.length)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculateResult(num1, randomOperator, num2).toString();

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
