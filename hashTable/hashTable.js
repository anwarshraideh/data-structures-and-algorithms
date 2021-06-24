'use strict';

// const LinkedList = require('../javascript/linked-list/linked-list.js');
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.keys = [];
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].append({ key, value });
    this.keys[this.keys.length] = key;
  }

  hash(key) {
    const hash = 37;
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += hash * total + key.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  get(key) {
    let index = this.hash(key);
    if (this.contains(key)) {
      let valuesArr = this.table[index].values();
      for (let i = 0; i < valuesArr.length; i++) {
        if (valuesArr[i].key === key) return valuesArr[i];
      }
    }
    return null;
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.table[hash]) return false;
    return true;
  }
}

module.exports = HashTable;
