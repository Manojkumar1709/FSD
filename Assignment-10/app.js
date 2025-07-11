import readline from 'readline';
import { add as sum, subtract as diff } from './mathOperations.js';
import User, { validateEmail } from './user.js';


console.log('\n--- Assignment 1: Math Operations ---');
console.log("Sum of 20 and 10:", sum(20, 10));        
console.log("Difference of 20 and 10:", diff(20, 10)); 


console.log('\n--- Assignment 3: User & Email Validation ---');
const user = new User('Manoj', 'manojkumarm1709@gmail.com');
console.log(user.getInfo());

const emailToCheck = 'email@gmail.com';
console.log(`Is "${emailToCheck}" a valid email?`, validateEmail(emailToCheck) ? 'Yes' : 'No');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter a word to capitalize (Assignment 2): ', async (inputWord) => {
  if (inputWord.trim()) {
    try {
      const stringUtils = await import('./stringUtils.js');
      const capitalized = stringUtils.capitalize(inputWord);
      console.log('Capitalized Word:', capitalized);
    } catch (error) {
      console.error('Failed to load module:', error);
    }
  } else {
    console.log('No input provided.');
  }

  rl.close();
});
