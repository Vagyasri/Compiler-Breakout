import './style.css';

const string = 'Hello World';

const words = string.split(' ');
const newWords = words.filter((word) => (word !== 'print') && (word !== 'start') && (word !== 'end') && (word !== ' '));
const newString = newWords.join(' ');
const noSpace = newString.replace(/\s/g, '');

console.log(noSpace);