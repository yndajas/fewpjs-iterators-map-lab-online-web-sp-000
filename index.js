const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // for each title
  return tutorials.map(title => {
    // split the words
    const words = title.split(' ');
    // for each word
    return words.map(word => {
      const upperFirst = word[0].toUpperCase();
      const restOfWord = word.slice(1, word.length);
      // upper case first letter, keep all else the same
      return `${upperFirst}${restOfWord}`;
    }).join(' '); // rejoin the tranformed words into the full title
  });
}
