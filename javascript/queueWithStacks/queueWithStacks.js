'use strict';

const { Stack } = require('./../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.front = null;
  }

  enqueue(value) {
    this.stack1.items.push(value);
    this.front = this.stack1.items[0];
  }

  dequeue() {
    while (this.stack1.items.length > 0) {
      this.stack2.push(this.stack1.items.pop());
    }
    let front = this.stack2.items.pop();
    this.front = this.stack2.items[this.stack2.items.length - 1];
    return front;
  }
}

module.exports = PseudoQueue;
