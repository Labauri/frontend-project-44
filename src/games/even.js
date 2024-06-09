import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
