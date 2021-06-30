'use strict';

const HashTable = require('../../hashTable/hashTable.js');
const {leftJoin} = require('../hashmapleftjoin.js');


describe('leftJoin ', () => {

  let hashTable1;
  let hashTable2;
  beforeEach(() => {
    hashTable1 = new HashTable(1024);
    hashTable2 = new HashTable(1024);

    hashTable1.add('fond', 'enamored');
    hashTable1.add('wrath', 'anger');
    hashTable1.add('diligent', 'employed');
    hashTable1.add('outfit', 'garb');
    hashTable1.add('guide', 'usher');

    hashTable2.add('fond', 'averse');
    hashTable2.add('wrath', 'delight');
    hashTable2.add('diligent', 'idle');
    hashTable2.add('guide', 'follow');
    hashTable2.add('flow', 'jam');
  });

  test(' successful  ', () => {
    // let expected = [
    //   ['fond', 'enamored', 'averse'],
    //   ['outfit', 'garb', null],
    //   ['diligent', 'employed', 'idle'],
    //   ['guide', 'usher', 'follow'],
    //   ['wrath', 'anger', 'delight'],
    // ];
    const result = leftJoin(hashTable1, hashTable2);
    expect(result.length).toBe(5);

  });

  test('Does not add non-corresponding key from second table', () => {
    let result = leftJoin(hashTable1, hashTable2);
    expect(result.flow).toBeFalsy();
  });



});
