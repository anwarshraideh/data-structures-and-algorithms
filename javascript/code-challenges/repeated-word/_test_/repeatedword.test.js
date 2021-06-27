// 'use strict';

// const repeatedWord = require('../repeatedword');
// const testOne = 'Once upon a time, there was a brave princess who...';
// const testTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
// const testThree = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
// const testFour = 'afnan saleem taqi damra my name all words are unique';

// describe('Repeated Word Test', () => {
//   it('should find the first word to occur more than once in a string', ()=>{
//     expect(repeatedWord(testOne)).toBe('a');
//     expect(repeatedWord(testTwo)).toBe('it');
//     expect(repeatedWord(testThree)).toBe('summer');
//   });
//   it('should return an exception if every word in the string is unique', ()=>{
//     expect(repeatedWord(testFour)).toBe('All words are unique!');
//   });
// });

'use strict';

const isRepeated= require('../repeatedword.js');

test('return the text is unprovided if it was empty string',()=>{
  let str= '';

  let expected= isRepeated(str);

  expect(expected).toEqual('No repeated words');
});

test('Happy results (Expected results)',()=>{
  let str= 'Once upon a time, there was a brave princess who...';

  let expected= isRepeated(str);

  expect(expected).toEqual('a');
});

test('Exception',()=>{
  let str= ' ';

  let expected= isRepeated(str);

  expect(expected).toEqual('Exception');
});
