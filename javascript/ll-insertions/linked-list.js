'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }


  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    //   this.length++;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    //   this.length++;
    }
  }



}

module.exports = LinkedList;
