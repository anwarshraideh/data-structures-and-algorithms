'use strict';

const HashTable = require('../../hashTable/hashTable.js');
const leftJoin = require('../hashmapleftjoin.js');

const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add('fatherName', 'haithem');
hashTable1.add('sonName', 'ahmad');
hashTable2.add('sonName', 'abood');
hashTable2.add('motherName', 'maha');

test('Happy path', () => {
//   const hashTable1 = new HashTable();
//   const hashTable2 = new HashTable();
//   hashTable1.add('fatherName', 'haithem');
//   hashTable1.add('sonName', 'ahmad');
//   hashTable2.add('sonName', 'abood');
//   hashTable2.add('motherName', 'maha');

  expect(leftJoin(hashTable1, hashTable2)).toEqual([
    ['fatherName', 'haithem', null],
    ['sonName', 'ahmad', 'abood'],
  ]);
});

test('Edge case', () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable1.add('fatherName', 'haithem');
  hashTable1.add('sonName', 'ahmad');
  hashTable2.add('sonName', 'abood');
  hashTable2.add('motherName', 'maha');

  expect(leftJoin(hashTable1)).toEqual('Exception');
});

