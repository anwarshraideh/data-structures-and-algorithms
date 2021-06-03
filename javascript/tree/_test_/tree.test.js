'use strict';

const Node = require('../node.js');
const { BinarySearchTree } =require('../tree.js');

describe(' Binary Search Tree ' , () =>{

  it('Can successfully instantiate an empty tree',()=>{

    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();

    // let root = new Node(2);
    // let binaryTree = new BinarySearchTree(root);
    // expect(binaryTree.root.next).toBeNull();

  });


});

