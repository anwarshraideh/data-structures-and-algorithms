'use strict';
const PseudoQueue = require('../queueWithStacks.js');
describe('Psuedo Queue tests', () => {
  it('Happy Path. enqueu into the Pseudo Queue', () => {
    let pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    pQueue.enqueue(2);
    expect(pQueue.pushStack.peek()).toEqual(2);
    expect(pQueue.popStack.isEmpty()).toBeTruthy();
  });
  it('Happy Path. enqueu into the Pseudo Queue and dequeue from it', () => {
    let pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    pQueue.enqueue(2);
    pQueue.enqueue(3);
    pQueue.dequeue();
    expect(pQueue.pushStack.isEmpty()).toBeTruthy();
    expect(pQueue.popStack.peek()).toEqual(2);
  });
  it('dequeue the both stacks both should be empty', () => {
    let pQueue = new PseudoQueue();
    pQueue.enqueue(1);
    pQueue.enqueue(2);
    pQueue.enqueue(3);
    pQueue.dequeue();
    pQueue.dequeue();
    pQueue.dequeue();
    expect(pQueue.pushStack.isEmpty()).toBeTruthy();
    expect(pQueue.popStack.isEmpty()).toBeTruthy();
  });
  it('dequeue empty stacks should return exception ', () => {
    let pQueue = new PseudoQueue();
    expect(pQueue.dequeue()).toEqual('empty queue');
  });
});
