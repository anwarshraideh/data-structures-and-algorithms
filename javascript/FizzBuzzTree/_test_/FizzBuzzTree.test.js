
'use strict';

const { Node, KAryTree } = require('../FizzBuzzTree.js');

describe('fizzBuzzTree test', () => {
  it('Should replace with divisible numbers on 3 with Fizz, divisible numbers on 5 with Buzz and if it\'s divisible on both FizzBuzz, and if not replace them with string', () => {


    let one = new Node(2);
    let two = new Node(9);//3
    let three = new Node(10);
    let four = new Node(2);
    let five = new Node(3); //6
    let six = new Node(5); //10
    let seven = new Node(15);
    let eight = new Node(11);
    let nine = new Node(9);


    one.children = [two, three, four];
    two.children = [five];
    three.children = [six, seven];
    five.children = [eight];
    six.children = [nine];


    let kAryTree = new KAryTree(one);
    let newKAryTree = new KAryTree();

    newKAryTree.fizzBuzzTree(kAryTree);

    expect(newKAryTree.root.children[0].value).toEqual('Fizz'); //3
    expect(newKAryTree.root.children[0].children[0].value).toEqual('Fizz'); //6
    expect(newKAryTree.root.children[1].children[0].value).toEqual('Buzz'); //10
    expect(newKAryTree.root.children[1].children[1].value).toEqual('FizzBuzz'); //15
    expect(newKAryTree.root.children[0].children[0].children[0].value).toEqual('not divisible by 3 or 5'); // 8
  });
});

