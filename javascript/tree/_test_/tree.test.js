'use strict';

const Node = require('../node.js');
const { BinarySearchTree } =require('../tree.js');

describe(' Binary Search Tree ' , () =>{

  it('Can successfully instantiate an empty tree',()=>{

    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();

  });

  it('Can successfully instantiate a tree with a single root node',()=>{

    let value = 6 ;
    let root = new Node(value);

    let binaryTree = new BinarySearchTree(root);
    // expect(binaryTree.root.next).toBeNull();
    expect(binaryTree.root.value).toEqual(value);

  });





});

