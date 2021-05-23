'use strict';
const { Node, LinkedList } = require('../index');

describe('testing the linked list', () => {
  test('empty instance of linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });


  test('append a value to the end of linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.append(4);
    expect(linkedList.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->NULL');
  });
  test('append multible value to the end of linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->{5} ->NULL');
  });
  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertBefore(2, 5);
    expect(linkedList.toString()).toEqual('{3} ->{5} ->{2} ->{1} ->NULL');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insert(new Node(5));
    expect(linkedList.toString()).toEqual('{5} ->{3} ->{2} ->{1} ->NULL');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertAfter(2, 5);

    expect(linkedList.toString()).toEqual('{3} ->{2} ->{5} ->{1} ->NULL');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertAfter(1, 5);

    expect(linkedList.toString()).toEqual('{3} ->{2} ->{1} ->{5} ->NULL');
  });

});
