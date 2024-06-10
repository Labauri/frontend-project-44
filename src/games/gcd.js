import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b]; 
  }
  return a;
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100); 
  const num2 = getRandomNumber(1, 100); 

  const gcdValue = gcd(num1, num2);
  
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcdValue);
  
  return [question, correctAnswer];
};

export default () => playGame(description, generateRound); 
