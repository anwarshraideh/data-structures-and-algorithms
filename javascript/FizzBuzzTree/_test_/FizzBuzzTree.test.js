// 'use strict';
// const BinaryTree = require('../../tree/tree.js');
// const fizzBuzzTree = require('../FizzBuzzTree.js');
// describe('Binary Tree', ()=>{
//   let tree = null;
//   beforeAll(()=>{
//     let node1 = new BinaryTree.Node(1);
//     let node2 = new BinaryTree.Node(12);
//     let node3 = new BinaryTree.Node(10);
//     let node4 = new BinaryTree.Node(30);
//     let node5 = new BinaryTree.Node(7);
//     node1.left = node2;
//     node1.right = node3;
//     node2.left = node4;
//     node3.right = node5;

//     tree = new BinaryTree.BinaryTree(node1);
//   });
//   it('If the value is divisible by 3, replace the value with “Fizz”',() => {
//     expect(fizzBuzzTree(tree).root.left.value).toEqual('Fizz');
//   });

//   it('If the value is divisible by 5, replace the value with “Buzz”',() => {
//     expect(fizzBuzzTree(tree).root.right.value).toEqual('Buzz');
//   });
//   it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',() => {
//     expect(fizzBuzzTree(tree).root.left.left.value).toEqual('FizzBuzz');
//   });
//   it('If the value is not divisible by 3 or 5, simply turn the number into a String',() => {
//     expect(fizzBuzzTree(tree).root.value).toEqual('1');
//     expect(fizzBuzzTree(tree).root.right.right.value).toEqual('7');
//   });
// });

'use strict';

const { Node, KAryTree } = require('../fizz-buzz-tree.js');

describe('==================FIZZ BUZZ TREE==================', () => {
  it('Should replace with divisible numbers on 3 with Fizz, divisible numbers on 5 with Buzz and if it\'s divisible on both FizzBuzz, and if not replace them with string', () => {
    let n1 = new Node(2);
    let n2 = new Node(3);
    let n3 = new Node(5);
    let n4 = new Node(2);
    let n5 = new Node(6);
    let n6 = new Node(10);
    let n7 = new Node(15);
    let n8 = new Node(11);
    let n9 = new Node(9);

    n1.children = [n2, n3, n4];
    n2.children = [n5];
    n3.children = [n6, n7];
    n5.children = [n8];
    n6.children = [n9];

    let kAryTree = new KAryTree(n1);
    let newKAryTree = new KAryTree();

    newKAryTree.fizzBuzzTree(kAryTree);
    console.log(newKAryTree);
    expect(newKAryTree.root.children[0].value).toEqual('Fizz');
    expect(newKAryTree.root.children[0].children[0].value).toEqual('Fizz');
    expect(newKAryTree.root.children[1].children[0].value).toEqual('Buzz');
    expect(newKAryTree.root.children[1].children[1].value).toEqual('FizzBuzz');
    expect(newKAryTree.root.children[0].children[0].children[0].value).toEqual('Not multiple of 3 nor 5');
  });
});

