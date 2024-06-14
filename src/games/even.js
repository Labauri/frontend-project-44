import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
