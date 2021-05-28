'use strict';

const { Stack , Queue } = require('../stacks-and-queues');
const stack = new Stack();
const queue = new Queue();

describe ('stack testing',()=>{

  it('Can successfully push onto a stack',()=>{

    stack.push(6);
    expect(stack.top.value).toEqual(6);
  });

  it('Can successfully push multiple values onto a stack',()=>{

    // stack.push(6);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });

  it('Can successfully pop off the stack',()=>{

    // stack.push(6);
    // stack.push(2);
    stack.pop();
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops',()=>{

    // stack.push(6);
    // stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack',()=>{

    expect(stack.peek()).toEqual('empty stack');

  });

  it('Can successfully instantiate an empty stack',()=>{


    expect(stack.isEmpty()).toBeTruthy();

  });

  it('Calling pop or peek on empty stack raises exception',()=>{

    expect(stack.peek()).toEqual('empty stack');
    expect(stack.pop()).toEqual('empty stack');
  });

});

describe ('queue testing',()=>{

  it('Can successfully enqueue into a queue',()=>{

    queue.enqueue(6);
    expect(queue.front.value).toEqual(6);
  });

  it('Can successfully enqueue multiple values into a queue',()=>{

    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.front.value).toEqual(6);
    expect(queue.front.next.value).toEqual(4);
    expect(queue.front.next.next.value).toEqual(5);

  });

  it('Can successfully dequeue out of a queue the expected value',()=>{

    expect(queue.dequeue()).toEqual(6);
  });

  it('Can successfully peek into a queue, seeing the expected value',()=>{
    expect(queue.peek()).toEqual('empty queue');
  });

  it('Can successfully empty a queue after multiple dequeues',()=>{

    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();

  });

  it('Can successfully instantiate an empty queue',()=>{

    let queue1 = new Queue();
    expect(queue1.isEmpty()).toBeTruthy();

  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{

    let queue2 = new Queue();
    expect(queue2.dequeue()).toEqual('empty queue');
    expect(queue2.peek()).toEqual('empty queue');

  });

});


