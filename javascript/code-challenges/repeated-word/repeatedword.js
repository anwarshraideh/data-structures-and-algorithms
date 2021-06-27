'use strict';

function isRepeated(string) {

  if (string.length) {
    let words = string.match(/\w+/g);
    let count = {};

    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();

      if (!count[word]) {
        count[word] = 1;
      } else if (count[word]) {
        count[word]++;
      }
      if (count[word] > 1) {
        return word;
      }
    }
  } else {
    return 'No repeated words';
  }
}

// let str = 'Once upon a time, there was a brave princess who...';

// isRepeated(str);

module.exports = isRepeated;
