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


    let value = 8 ;
    let root = new Node(value);
    let binaryTree = new BinarySearchTree(root);
    const left = 3;
    const right = 12;
    binaryTree.add(left);
    binaryTree.add(right);
    expect(binaryTree.root.left.value).toEqual(left);
    expect(binaryTree.root.right.value).toEqual(right);

  });

  it('Can successfully return a collection from a preorder traversal',()=>{

    let value = 2 ;
    let root = new Node(value);
    let binaryTree = new BinarySearchTree(root);

    binaryTree.add(4);
    binaryTree.add(11);
    binaryTree.add(6);
    binaryTree.add(9);
    binaryTree.add(0);

    expect(binaryTree.preOrder()).toStrictEqual([2, 0, 4, 11, 6, 9]);

  });




});

