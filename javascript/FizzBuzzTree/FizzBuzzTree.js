// 'use strict';

// function FizzBuzzTree(tree) {
//   let _traverse = (node) => {
//     if (node.value) {
//       if (node.value % 3 === 0 && node.value % 5 === 0){
//         node.value = 'FizzBuzz';

//       }else if (node.value % 5 === 0){
//         node.value = 'Buzz';

//       }else if (node.value % 3 === 0){
//         node.value = 'Fizz';

//       }else{
//         //turn the number into a String
//         node.value = `${node.value}`;
//       }
//     }
//     if (node.left){
//       _traverse(node.left);
//     }
//     if (node.right){
//       _traverse(node.right);
//     }
//   };

//   _traverse(tree.root);
//   return tree;
// }



// module.exports = FizzBuzzTree;



'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  fizzBuzzTree(tree) {
    this.root = tree.root;

    const _traverse = (node) => {
      if (!(node.value % 15)) {
        node.value = 'FizzBuzz';
      } else if (!(node.value % 5)) {
        node.value = 'Buzz';
      } else if (!(node.value % 3)) {
        node.value = 'Fizz';
      } else {
        node.value = 'Not multiple of 3 nor 5';
      }
      if (node.children.length) {
        for (let counter = 0; counter < node.children.length; counter++) {
          _traverse(node.children[counter]);
        }
      }
    };
    _traverse(this.root);
  }
}

module.exports = { Node, KAryTree };
