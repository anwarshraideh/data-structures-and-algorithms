'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
      this.length++;
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
        this.length++;
        return;
      }
      current = current.next;
    }
    return 'Exeption';
  }
  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current && current.next !== null) {
      if (current.next.value === value) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length++;
        return;
      }
      current = current.next;
    }
    return 'Exeption';
  }

}
module.exports = {
  Node: Node,
  LinkedList: LinkedList,
};
