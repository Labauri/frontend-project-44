import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = getRandomNumber(1, 100); 
  const question = String(num); 
  const correctAnswer = isPrime(num) ? 'yes' : 'no'; 
  
  return [question, correctAnswer];
}

export default () => playGame(description, generateRound);
