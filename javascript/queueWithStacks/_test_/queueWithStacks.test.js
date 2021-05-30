'use strict';
const PseudoQueue = require('../queueWithStacks.js');


describe('psuedo test', () => {

  it('enqueu test', () => {

    let queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.secondStack.isEmpty()).toBeTruthy();
    expect(queue.firstStack.peek()).toEqual(20);

  });

  it('test enqueu and dequeue ', () => {

    let queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.dequeue();

    expect(queue.firstStack.isEmpty()).toBeTruthy();
    expect(queue.secondStack.peek()).toEqual(20);

  });


  it('dequeue the both stacks ', () => {

    let queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.firstStack.isEmpty()).toBeTruthy();
    expect(queue.secondStack.isEmpty()).toBeTruthy();

  });

  it('dequeue empty queue should return exception ', () => {

    let queue = new PseudoQueue();
    expect(queue.dequeue()).toEqual('empty queue');

  });
});
