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


    list.insert(1);
    list.insert(2);
    list.insert(3);

    list.append(4);
    expect(list.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->NULL');
  });

  it('append multible value to the end of linked list', () => {

    list.insert(1);
    list.insert(2);
    list.insert(3);

    list.append(4);
    list.append(5);
    expect(list.toString()).toEqual('{3} ->{2} ->{1} ->{4} ->{5} ->NULL');
  });


});


