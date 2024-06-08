#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const playEvenGame = () => {
  const userName = name();
  const roundsToWin = 3;
  const evenNum = (num) => num % 2 === 0;
  const randomNum = () => Math.floor(Math.random() * 100) + 1;
  const correctAnswer = (num) => (evenNum(num) ? 'yes' : 'no');
  let correctAnswerCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswerCount < roundsToWin) {
    const number = randomNum();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const expectedAnswer = correctAnswer(number);

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswerCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
