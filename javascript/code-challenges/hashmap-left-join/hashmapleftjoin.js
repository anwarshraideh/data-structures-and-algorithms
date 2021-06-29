'use strict';
const HashTable = require('../hashTable/hashTable.js');

const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add('firstName', 'Ahmad');
hashTable1.add('secondName', 'Mohd');
hashTable2.add('secondName', 'Test');
hashTable2.add('thirdName', 'Samer');


function leftJoin(leftHash, rightHash) {
  if((leftHash && !rightHash) || (!leftHash && rightHash)) {
    return 'Exception';
  }

  if(Object.keys(leftHash.table).length === 0) {
    return 'Please pass a full hash table';
  }
  let output = [];

  for (let i = 0; i < Object.keys(leftHash.table).length; i++) {

    let leftKey = Object.values(leftHash.table)[i].head.value.key;
    let leftValue = Object.values(leftHash.table)[i].head.value.value;

    for (let j = 0; j < Object.keys(rightHash.table).length; j++) {
      let rightKey = Object.values(rightHash.table)[j].head.value.key;
      let rightValue = Object.values(rightHash.table)[j].head.value.value;
      if(leftKey === rightKey) {
        output.push([leftKey, leftValue, rightValue]);
        break;
      } else if (j === Object.keys(rightHash.table).length - 1) {
        output.push([leftKey, leftValue, null]);
      }
    }
  }
  return output;
}

module.exports = leftJoin;

