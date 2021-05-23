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
    let node = this.head;
    let listString = '';
    while (node) {
      listString += `{${node.value}} ->`;
      node = node.next;
    }
    listString += `NULL`;
    return listString;
  }

  ////////////////// ll-insertion///////////////////////

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      // this.length++;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
      // this.length++;
    }
  }

  
 


}

module.exports = LinkedList;
