'use strict';

const PseudoQueue = require('../queueWithStacks.js');

describe('queue test ',()=> {

  it('enqueue test ',()=>{
    let pqueue = new PseudoQueue();
    pqueue.enqueue(10);
    pqueue.enqueue(20);
    expect(pqueue.pushStack.peek()).toEqual(20);

  });

  it('enqueue and dequeue from the queue ',()=>{
    let pqueue = new PseudoQueue();
    pqueue.enqueue(10);
    pqueue.enqueue(20);
    pqueue.enqueue(30);
    pqueue.dequeue();

    expect(pqueue.popStack.peek()).toEqual(20);
    expect(pqueue.pushStack.isEmpty()).toBeTruthy();

  });

  it('deque test  ',()=>{
    let pqueue = new PseudoQueue();
    pqueue.enqueue(10);
    pqueue.enqueue(20);
    pqueue.enqueue(30);
    pqueue.dequeue();
    pqueue.dequeue();
    pqueue.dequeue();

    expect(pqueue.popStack.isEmpty()).toBeTruthy();
    expect(pqueue.pushStack.isEmpty()).toBeTruthy();

  });

  it('deque test  ',()=>{
    let pqueue = new PseudoQueue();
    pqueue.enqueue(10);
    pqueue.enqueue(20);
    pqueue.enqueue(30);
    pqueue.dequeue();
    pqueue.dequeue();
    pqueue.dequeue();

    expect(pqueue.popStack.isEmpty()).toBeTruthy();
    expect(pqueue.pushStack.isEmpty()).toBeTruthy();

  });

  it('deque empty queue should return exception ',()=>{

    let pqueue = new PseudoQueue();

    expect(pqueue.dequeue()).toBe('empty queue');

  });



});
