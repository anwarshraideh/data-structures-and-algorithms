'use strict';

const LinkedList = require('../../javascript/linked-list/linked-list.js');


function zipLists(list1, list2) {

  let newList = new LinkedList();
  let llist1, llist2;


  if (list1.head)
    llist1 = list1.head;
  else
    return list2.toString();
  if (list2.head)
    llist2 = list2.head;
  else
    return list1.toString();


  newList.append(llist1.value);
  newList.append(llist2.value);
  llist1 = llist1.next;
  llist2 = llist2.next;


  while (llist1 || llist2) {

    if (llist1 && llist2)
    {

      newList.append(llist1.value);
      newList.append(llist2.value);
      llist1 = llist1.next;
      llist2 = llist2.next;
    }
    else if (llist1)
    {
      newList.append(llist1.value);
      llist1 = llist1.next;
    }
    else if (llist2) {

      newList.append(llist2.value);
      llist2 = llist2.next;

    }
  }
  return newList;


}

module.exports = zipLists;


