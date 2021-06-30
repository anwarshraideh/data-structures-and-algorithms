'use strict';

// const {HashTable} = require('../hashTable/hash-table');

function leftJoin(hashTable1, hashTable2) {
  const leftJoinResult = [];

  hashTable1.table.forEach(bucket => {
    if (bucket) {
      let currentNode = bucket.head;

      while (currentNode) {

        let key = Object.keys(currentNode.value)[0];
        //   leftJoinObj[key] = [bucket.root.value[key]];
        let value1 = Object.values(currentNode.value)[0];
        let value2 = null;

        if (hashTable2.contains(key)) value2 = hashTable2.get(key);

        leftJoinResult.push([key, value1, value2]);

        currentNode = currentNode.next;

      }
    }

  });
  return leftJoinResult;
}

//   hashTable2.table.forEach(bucket => {
//     if (bucket) {
//       let key = Object.keys(bucket.root.value)[0];
//       if (leftJoinObj[key]) {
//         leftJoinObj[key].push(bucket.root.value[key]);
//       }
//     }
//   });


// console.log(leftJoin(hashTable1, hashTable2));

module.exports = {
  leftJoin ,
};
