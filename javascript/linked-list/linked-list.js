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
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    }
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
    }
    return 'not exist';
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current && current.next !== null) {
      if (current.next.value === value) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
    }
    return 'not exist';
  }


  kthFromEnd(k) {
    let current = this.head;
    if (k <= this.length - 1 && k >= 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        if (k === i) {
          return current.value;
        }
        current = current.next;
      }
    } else {
      return 'Exception';
    }
  }

}

module.exports = LinkedList;
