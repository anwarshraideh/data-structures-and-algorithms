'use strict';


const Node = require('./node.js');


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    if (this.head) {
      let node = this.head;
      if (node.value === value)
        return true;
      while (node.next) {
        node = node.next;
        if (node.value === value)
          return true;
      }
    }
    return false;
  }

  toString() {

    let linkedlistString = '';
    if (!this.head)
      linkedlistString = 'empty';
    else
    {

      let node = this.head;
      linkedlistString = `{ ${node.value} } -> `;
      while (node.next) {
        node = node.next;
        linkedlistString += `{ ${node.value} } -> `;
      }
      linkedlistString += `NULL`;

    }
    return linkedlistString;
  }
}

module.exports = LinkedList;
