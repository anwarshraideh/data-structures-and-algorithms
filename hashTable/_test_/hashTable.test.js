'use strict';

const HashTable = require('../hashTable.js');

describe('Hash Tables test', () => {

  const hashtable = new HashTable(101);

  beforeAll(() => {
    hashtable.add('daughter', 'anwar');
    hashtable.add('father', 'haythem');
    hashtable.add('son', 'ali');
  });

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let table1 = hashtable.table.filter((value) => value !== null);
    expect(table1.length).toBe(3);
  });
  it('Retrieving based on a key returns the value stored', () => {
    let index = hashtable.hash('daughter');
    expect(hashtable.table[index].head.value.value).toStrictEqual('anwar');
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashtable.contains('rahaf')).toBeFalsy();
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashtable.add('daughter', 'ghofran');
    let bucket = hashtable.get('daughter');
    expect(bucket.value).toEqual('anwar');
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let index = hashtable.hash('daughter');
    expect(hashtable.table[index].values()).toEqual([
      {
        key: 'daughter',
        value: 'anwar',
      },
      {
        key: 'daughter',
        value: 'ghofran',
      },
    ]);
  });
  it('Successfully handle a collision within the hashtable', () => {
    let hash = hashtable.hash('welcome');
    expect(hash).toBeLessThan(101);

  });
});
