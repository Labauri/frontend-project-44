import playGame from '../index.js';

const description = 'What is the result of the expression?';
const randomIndex = (max) => Math.floor(Math.random() * max);
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateRound = () => {
  const operator = ['+', '-', '*'];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const randomOperator = operator[randomIndex(operator.length)];

  const question = `${num1} ${randomOperator} ${num2}`;
  let correctAnswer;

  switch (randomOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }

  return [question, correctAnswer.toString()];
};

export default () => playGame(description, generateRound);
