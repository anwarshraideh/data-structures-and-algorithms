'use strict';

const HashTable = require('../../hashTable/hashTable.js');
const leftJoin = require('../hashmapleftjoin.js');


describe('returns a joined matrix', () => {
  it('accepts two HashTables as arguments', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    hashtable1.set('fond', 'enamour');
    hashtable1.set('wrath', 'anger');
    hashtable1.set('diligent', 'employed');
    hashtable1.set('outfit', 'garb');
    hashtable1.set('guide', 'usher');

    hashtable2.set('fond', 'averse');
    hashtable2.set('wrath', 'delight');
    hashtable2.set('diligent', 'idle');
    hashtable2.set('guide', 'follow');
    hashtable2.set('flow', 'jam');

    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'fond', 'enamour', 'averse' ],
      [ 'guide', 'usher', 'follow' ]
    ]);
  });

  it('returns null if either the first or right HashTables is empty', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    let hashtable3 = new HashTable(16);

    hashtable3.set('fond', 'enamour');
    hashtable3.set('wrath', 'anger');
    hashtable3.set('diligent', 'employed');
    hashtable3.set('outfit', 'garb');
    hashtable3.set('guide', 'usher');

    let result = leftJoin(hashtable1, hashtable2);
    let result2 = leftJoin(hashtable1, hashtable3);
    expect(result).toBe(null);
    expect(result2).toBe(null);
  });

  it('returns an array in which the second index is null in each sub-array when no keys match between the two tables', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    hashtable1.set('fond', 'spice');
    hashtable1.set('wrath', 'anger');
    hashtable1.set('diligent', 'employed');
    hashtable1.set('outfit', 'garb');
    hashtable1.set('guide', 'usher');

    hashtable2.set('sugar', 'averse');
    hashtable2.set('salt', 'delight');
    hashtable2.set('pepper', 'idle');
    hashtable2.set('florence', 'follow');
    hashtable2.set('waterfall', 'jam');
    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      [ 'diligent', 'employed', null ],
      [ 'outfit', 'garb', null ],
      [ 'wrath', 'anger', null ],
      [ 'fond', 'spice', null ],
      [ 'guide', 'usher', null ]
    ]);
  });

  it('returns an array in which the second index is null in each sub-array when no keys match between the two tables and the tables are small enough to require values to be stacked in buckets', () => {
    let hashtable1 = new HashTable(2);
    let hashtable2 = new HashTable(2);
    hashtable1.set('fond', 'spice');
    hashtable1.set('wrath', 'anger');
    hashtable1.set('diligent', 'employed');
    hashtable1.set('outfit', 'garb');
    hashtable1.set('guide', 'usher');

    hashtable2.set('sugar', 'averse');
    hashtable2.set('salt', 'delight');
    hashtable2.set('pepper', 'idle');
    hashtable2.set('florence', 'follow');
    hashtable2.set('waterfall', 'jam');
    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      [ 'wrath', 'anger', null ],
      [ 'diligent', 'employed', null ],
      [ 'guide', 'usher', null ],
      [ 'fond', 'spice', null ],
      [ 'outfit', 'garb', null ]
    ]);
  });

});
