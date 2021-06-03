'use strict';

const Node = require('../node.js');
const { BinaryTree , BinarySearchTree } = require('../tree.js');

let tree = null;

describe(' Binary Tree ' , () =>{

  beforeAll(() => {
    let one = new Node(10);// tree root
    let two = new Node(20);
    let three = new Node(30);
    let four = new Node(40);
    let five = new Node(50);
    let six = new Node(60);
    let seven = new Node(70);
    let eight = new Node(80);
    let nine = new Node(90);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //             10
    //     20               30
    // 60        -      40       50
    //     70
    // 80       90
    tree = new BinaryTree(one);
  });

  it('Should successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Should successfully instantiate a tree with a single root node', () => {
    const one = new Node(10);
    const tree = new BinaryTree(one);
    expect(tree.root.value).toBe(10);
  });

  



  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [10, 20, 60, 70, 80, 90, 30, 40, 50];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect(preOrderResult).toEqual(expected);
  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [60, 80, 70, 90, 20, 10, 40, 30, 50];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect(inOrderResult).toEqual(expected);
  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [80, 90, 70, 60, 20, 40, 50, 30, 10];
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



