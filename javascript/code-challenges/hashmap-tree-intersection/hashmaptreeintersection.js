'use strict';

const HashTable = require('../hashTable/hashTable.js');

function treeIntersection(tree1, tree2) {

  if((tree1 && !tree2) || (!tree1 && tree2)) {
    return 'Exception';
  }
  let Output = [];
  const hashtable = new HashTable(2048);
  const treeOneArray = tree1.preOrder();
  const treeTwoArray = tree2.preOrder();

  for (let i = 0; i < treeOneArray.length; i++) {
    if (!hashtable.contains(treeOneArray[i].toString())) {
      hashtable.add(treeOneArray[i].toString(), treeOneArray[i]);
    }
  }


  for (let i = 0; i < treeTwoArray.length; i++) {
    if (hashtable.contains(treeTwoArray[i].toString())) {
      Output.push(treeTwoArray[i]);
    }
  }

  if (Output.length > 0) {
    return Output;
  }
  else {
    return 'no common values inside the two trees';
  }
}
module.exports = treeIntersection;


