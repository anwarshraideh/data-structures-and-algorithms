'use strict';

const HashTable = require('../../hashTable/hashTable.js');
const leftJoin = require('../hashmapleftjoin.js');

// const hashTable1 = new HashTable();
// const hashTable2 = new HashTable();
// hashTable1.add('fatherName', 'haithem');
// hashTable1.add('sonName', 'ahmad');
// hashTable2.add('sonName', 'abood');
// hashTable2.add('motherName', 'maha');

// test('Happy path', () => {
// //   const hashTable1 = new HashTable();
// //   const hashTable2 = new HashTable();
// //   hashTable1.add('fatherName', 'haithem');
// //   hashTable1.add('sonName', 'ahmad');
// //   hashTable2.add('sonName', 'abood');
// //   hashTable2.add('motherName', 'maha');

//   expect(leftJoin(hashTable1, hashTable2)).toEqual([
//     ['fatherName', 'haithem', null],
//     ['sonName', 'ahmad', 'abood'],
//   ]);
// });
describe('returns a joined matrix', () => {
  it('accepts two HashTables as arguments', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    hashtable1.add('fond', 'enamour');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('fond', 'averse');
    hashtable2.add('wrath', 'delight');
    hashtable2.add('diligent', 'idle');
    hashtable2.add('guide', 'follow');
    hashtable2.add('flow', 'jam');

    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      ['fond', 'enamour', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow']
    ]);
  });

  it('returns null if either the first or right HashTables is empty', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    let hashtable3 = new HashTable(16);

    hashtable3.add('fond', 'enamour');
    hashtable3.add('wrath', 'anger');
    hashtable3.add('diligent', 'employed');
    hashtable3.add('outfit', 'garb');
    hashtable3.add('guide', 'usher');

    let result = leftJoin(hashtable1, hashtable2);
    let result2 = leftJoin(hashtable1, hashtable3);
    expect(result).toBe(null);
    expect(result2).toBe(null);
  });

  it('returns an array in which the second index is null in each sub-array when no keys match between the two tables', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    hashtable1.add('fond', 'spice');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('sugar', 'averse');
    hashtable2.add('salt', 'delight');
    hashtable2.add('pepper', 'idle');
    hashtable2.add('florence', 'follow');
    hashtable2.add('waterfall', 'jam');
    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      ['fond', 'spice', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null]
    ]);
  });

  it('returns an array in which the second index is null in each sub-array when no keys match between the two tables and the tables are small enough to require values to be stacked in buckets', () => {
    let hashtable1 = new HashTable(2);
    let hashtable2 = new HashTable(2);
    hashtable1.add('fond', 'spice');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('sugar', 'averse');
    hashtable2.add('salt', 'delight');
    hashtable2.add('pepper', 'idle');
    hashtable2.add('florence', 'follow');
    hashtable2.add('waterfall', 'jam');
    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      ['fond', 'spice', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
    ]);
  });

  it('Edge case', () => {
    let hashtable1 = new HashTable(2);
    let hashtable2 = new HashTable(2);
    hashtable1.add('fond', 'spice');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('sugar', 'averse');
    hashtable2.add('salt', 'delight');
    hashtable2.add('pepper', 'idle');
    hashtable2.add('florence', 'follow');
    hashtable2.add('waterfall', 'jam');

    expect(leftJoin(hashtable1)).toEqual('Exception');
  });
});

// test('Edge case', () => {
//   const hashTable1 = new HashTable();
//   const hashTable2 = new HashTable();
//   hashTable1.add('fatherName', 'haithem');
//   hashTable1.add('sonName', 'ahmad');
//   hashTable2.add('sonName', 'abood');
//   hashTable2.add('motherName', 'maha');

//   expect(leftJoin(hashTable1)).toEqual('Exception');
// });

