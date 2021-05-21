'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
let list = new LinkedList();
let newList = new LinkedList();

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

  it('should return a collection of all the values that exist in the linked list', () => {
    expect(typeof list.toString()).toBe('string');
    expect(list.toString()).toMatch(/(NULL)/gi);
    expect(list.toString()).toBe('{ 57 } -> { 5 } -> { 13 } -> NULL');
    expect(newList.toString()).toBe('empty');
  });


});
