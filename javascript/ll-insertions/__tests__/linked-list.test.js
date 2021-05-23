'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
let list = new LinkedList();


describe('LL Insertions', () => {
  it('append a value to the end of linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);

    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    list.append(4);
    expect(list.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->NULL');

  });
  it('should append multible value to the end of linked list', () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);

    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    list.append(4);
    list.append(5);
    expect(list.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->{5} ->NULL');


  });
  it('should insert a value before the given value in the linked list', () => {

  });
  it('should insert a value after the given value in the linked list', () => {

  });

  it('should insert a value before the given value in the linked list', () => {

  });
  it('should insert a value after the given value in the linked list', () => {

  });
});


