'use strict';

const LinkedList = require('../../linked-list/linked-list.js');
const zipLists = require('../llZip');


let list1 = new LinkedList();
let list2 = new LinkedList();
let emptyList = new LinkedList();

list1.append(5);
list1.append(1);
list1.append(10);

list2.append(40);
list2.append(70);
list2.append(2);


describe('Linked Lists', () => {

  it('make sure lists are initiated', () => {

    expect(list1.head.value).toBe(5);
    expect(list1.head.next.value).toBe(1);
    expect(list1.head.next.next.value).toBe(10);
    expect(list2.head.value).toBe(40);
    expect(list2.head.next.value).toBe(70);
    expect(list2.head.next.next.value).toBe(2);

  });
});

describe('Linked Lists Zip', () => {

  it('make sure lists are zipped ', () => {

    expect(zipLists(list1, list2).toString()).toBe('{5} ->{40} ->{1} ->{70} ->{10} ->{2} ->NULL');
    list1.append(40);
    expect(zipLists(list1, list2).toString()).toBe('{5} ->{40} ->{1} ->{70} ->{10} ->{2} ->{40} ->NULL');
    list2.append(45);
    list2.append(55);
    expect(zipLists(list1, list2).toString()).toBe('{5} ->{40} ->{1} ->{70} ->{10} ->{2} ->{40} ->{45} ->{55} ->NULL');

  });

  it('should accept empty list ', () => {

    expect(zipLists(list1, emptyList).toString()).toEqual(list1.toString());
    expect(zipLists(emptyList, list2).toString()).toEqual(list2.toString());
  });
});

