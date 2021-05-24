'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
let list = new LinkedList();

describe('Linked List', () => {

  it('should instantiate an empty linked list', () => {
    expect(list.head).toEqual(null);
  });

  it('should head property will to the first node in the linked list', () => {
    list.insert(13);
    expect(list.head.value).toBe(13);
    expect(list.head.next).toBeNull();
  });

  it('insert into the linked list', () => {
    list.insert(5);
    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(13);
    expect(list.head.next.next).toBeNull();
  });

  it('check if node exist in the list or not', () => {
    list.insert(57);
    expect(list.includes(57)).toBeTruthy();
    expect(list.includes(13)).toBeTruthy();
    expect(list.includes(20)).toBeFalsy();
  });



  it('return String of the nodes on the linked list', () => {

    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->NULL');
  });

});


describe('Ll insertion', () => {


  it('append a value to the end of linked list', () => {


    list.append(4);
    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->{4} ->NULL');
  });

  it('append multible value to the end of linked list', () => {


    list.append(6);
    list.append(7);
    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->{4} ->{6} ->{7} ->NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {

    list.insertAfter(13, 90);
    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->{90} ->{4} ->{6} ->{7} ->NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {

    list.insertAfter(7, 20);

    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->{90} ->{4} ->{6} ->{7} ->{20} ->NULL');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {

    list.insertBefore(4, 10);
    expect(list.toString()).toEqual('{57} ->{5} ->{13} ->{90} ->{10} ->{4} ->{6} ->{7} ->{20} ->NULL');
  });

});


describe('Ll insertion', () => {

  it(' k is greater than the length of the linked list', () => {

    expect(list.kthFromEnd(11)).toEqual('Exception');
  });

  it(' k and the length of the list are the same', () => {

    expect(list.kthFromEnd(9)).toEqual('Exception');
  });

  test(' k is not a positive integer', () => {

    expect(list.kthFromEnd(-6)).toEqual('Exception');
  });
  it('should find kth value in a linked list if the linked list is of a size 1', () => {
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList.kthFromEnd(0)).toEqual(1);

  });

});

