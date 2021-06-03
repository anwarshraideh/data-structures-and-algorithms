'use strict';

const Node = require('../node.js');
const { BinaryTree , BinarySearchTree } = require('../tree.js');

let tree = null;

describe(' Binary Tree ' , () =>{

  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //             1
    //     2               3
    // 6        -      4       5
    //     7
    // 8       9
    tree = new BinaryTree(one);
  });

  it('Should successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Should successfully instantiate a tree with a single root node', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.root.value).toBe(1);
  });

  it('Should successfully add a left child and right child to a single root node', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
  });



  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect(preOrderResult).toEqual(expected);
  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect(inOrderResult).toEqual(expected);
  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect(postOrderResult).toEqual(expected);
  });


});




describe('Binary Search Tree ',()=>{


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



});

