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

    if ( this.popStack.isEmpty() && !this.pushStack.isEmpty()) {

      while (this.pushStack.top)
      {
        this.popStack.push(this.pushStack.top.value);
        this.pushStack.top = this.pushStack.top.next;
      }

      this.popStack.pop();

    } else if (this.pushStack.isEmpty() && this.popStack.isEmpty())
    {
      return 'empty queue';
    }
    else
    {
      this.popStack.pop();
    }
  }


}

module.exports = PseudoQueue ;


