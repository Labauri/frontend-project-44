import playGame from '../index.js';

const description = 'What number is missing in the progression?';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const lengthProgression = getRandomNumber(5, 10);
  const startNum = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);

  const progression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startNum + step * i);
  }

  const hiddenElement = getRandomNumber(1, progression.length - 1);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
