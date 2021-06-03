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
    expect(binaryTree.root.value).toEqual(value);

  });

  it('Can successfully add a left child and right child to a single root node',()=>{

    let value = 20 ;
    let root = new Node(value);
    let binaryTree = new BinarySearchTree(root);

    binaryTree.add(30);
    binaryTree.add(10);

    expect(binaryTree.root.left.value).toEqual(10);
    expect(binaryTree.root.right.value).toEqual(11);


  });




});

