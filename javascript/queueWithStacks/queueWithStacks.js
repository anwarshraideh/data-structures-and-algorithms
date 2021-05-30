'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

  constructor(){

    this.pushStack = new Stack ();
    this.popStack - new Stack ();

  }

  enqueue(value){

    this.pushStack.push(value);

  }

  dequeue()
  {
    if (this.pushStack.isEmpty() && this.popStack.isEmpty() )
      return 'empty queue';

    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }

    }

    return this.popStack.pop();
  }



}

module.exports = PseudoQueue ;


