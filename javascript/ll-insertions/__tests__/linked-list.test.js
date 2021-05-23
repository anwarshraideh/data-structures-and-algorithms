'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
let list = new LinkedList();
let newList = new LinkedList();

describe('LL Insertions', () => {
  it('should append new node to empty linked list', () => {
    newList.append(83);
    expect(newList.head.value).toBe(83);
    expect(newList.head.next).toBeNull();
  });
  it('should append new node to the end of existing linked list', () => {
    newList.append(61);
    expect(newList.head.value).toBe(83);
    expect(newList.head.next.value).toBe(61);
    expect(newList.head.next.next).toBeNull();
  });
  it('should insert a value before the given value in the linked list', () => {
    expect(list.toString()).toBe('{ 57 } -> { 5 } -> { 13 } -> NULL');
    list.insertBefore(57, 91);
    expect(list.toString()).toBe('{ 91 } -> { 57 } -> { 5 } -> { 13 } -> NULL');
    list.insertBefore(5, 23);
    expect(list.toString()).toBe('{ 91 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> NULL');
    list.insertBefore(3, 20);
    expect(list.toString()).toBe('{ 91 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> NULL');
    expect(list.insertBefore(3, 20)).toBe('Value doesn\'t exist');
  });
  it('should insert a value after the given value in the linked list', () => {
    expect(list.toString()).toBe('{ 91 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> NULL');
    list.insertAfter(91, 40);
    expect(list.toString()).toBe('{ 91 } -> { 40 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> NULL');
    list.insertAfter(13, 76);
    expect(list.toString()).toBe('{ 91 } -> { 40 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> { 76 } -> NULL');
    list.insertAfter(20, 76);
    expect(list.insertBefore(20, 76)).toBe('Value doesn\'t exist');
    expect(list.toString()).toBe('{ 91 } -> { 40 } -> { 57 } -> { 23 } -> { 5 } -> { 13 } -> { 76 } -> NULL');
  });
});


