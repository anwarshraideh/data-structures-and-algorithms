'use strict';

const PseudoQueue = require('../queueWithStacks.js');

describe('PseudoQueue tests', () => {
  it('add to the Queue ', () => {
    let queue = new PseudoQueue();
    let value = 4;
    queue.enqueue(value);

    expect(queue.front).toBe(value);
  });

  it('add multiple to the Queue ', () => {
    let queue = new PseudoQueue();
    let value = 4;
    let value2 = 5;
    queue.enqueue(value);
    queue.enqueue(value2);
    expect(queue.front).toBe(value);
  });

  it('remove the front from the Queue', () => {
    let queue = new PseudoQueue();
    let value = 4;
    queue.enqueue(value);
    queue.dequeue();
    expect(queue.front).toBeUndefined();
  });

  it('should not remove the front from the Queue', () => {
    let queue = new PseudoQueue();
    queue.dequeue();
    expect(queue.front).toBeUndefined();
  });
});
