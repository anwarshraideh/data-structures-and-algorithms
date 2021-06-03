'use strict';

const Node = require('../node.js');
const { BinaryTree , BinarySearchTree } = require('../tree.js');

describe(' Binary Search Tree ' , () =>{

  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);

  });


  it('Can successfully instantiate an empty tree',()=>{

    let binaryTree = new BinarySearchTree();
    expect(binaryTree.root).toBeNull();

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

    // let value = 2 ;
    // let root = new Node(value);
    // let binaryTree = new BinarySearchTree(root);

    // binaryTree.add(4);
    // binaryTree.add(11);
    // binaryTree.add(6);
    // binaryTree.add(9);
    // binaryTree.add(0);

    // expect(binaryTree.preOrder()).toStrictEqual([2, 0, 4, 11, 6, 9]);


    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);


  });




});
