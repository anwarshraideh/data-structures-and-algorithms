'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KAryTree{
  constructor(root = null) {
    this.root = root;
  }

  fizzBuzzTree(tree) {
    this.root = tree.root;

    const _traverse = (node) => {
      // if (!(node.value % 15)) !(node.value % 5) !(node.value % 3)
      if (node.value % 15 === 0) { node.value = 'FizzBuzz';}
      else if (node.value % 5 === 0) { node.value = 'Buzz';}
      else if (node.value % 3 === 0) { node.value = 'Fizz';}

      else {
        node.value = 'Not multiple of 3 nor 5';
      }


      if (node.children.length) {
        for (let index = 0; index < node.children.length; index++) {
          _traverse(node.children[index]);
        }
      }
    };
    _traverse(this.root);
  }
}

module.exports = { Node, KAryTree };
