const leftJion =require('../hashmap-left-join.js');
const HashTable = require('../hashTable/hashTable.js');
let table1 = new HashTable(1024);
let table2 = new HashTable(1024);


describe('Take Size of Table', () => {
  it('should create a hashed table', () => {
    table1.set('ghofran', 'Ahmad');
    table2.set('ghofran', 'dayyat');
    table1.set('ghofran', 'dayyat');

    table1.set('samr', 'Ahmad');
    table2.set('samr', 'dayyat');

    console.log(table1);
    console.log(leftJion(table1,table2));
    expect(leftJion(table1,table2)).toEqual([ [ 'samr', 'Ahmad', 'dayyat' ], [ 'ghofran', 'Ahmad', 'dayyat' ] ]);
  });
});
