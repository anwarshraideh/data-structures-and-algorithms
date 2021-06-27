'use strict';

const HashTable = require('../hashTable/hashTable.js');

function repeatedWord(string) {

  const wordsArr = string.match(/\w+/g);
  let hashTable = new HashTable(wordsArr.length);

  for (let i = 0; i < wordsArr.length; i++) {
    let key = wordsArr[i].toLowerCase();
    if (hashTable.contains(key)) {
      if (hashTable.get(key) === key) return hashTable.get(key);
    }
    hashTable.add(key, key);
  }

  return 'All words are unique!';
}

module.exports = repeatedWord;
