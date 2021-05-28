'use strict';

const { Stack } = require('../stacks-and-queues');
const stack = new Stack();


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
    expect(stack.top.value).toEqual(6);
  });

  it('Can successfully empty a stack after multiple pops',()=>{

    // stack.push(6);
    // stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  it('Can successfully peek the next item on the stack',()=>{

    // stack.push(6);
    // stack.push(2);
    expect(stack.peek()).toEqual(2);

  });

  it('Can successfully instantiate an empty stack',()=>{

    expect(stack.isEmpty()).toBeTruthy();

  });

  it('Calling pop or peek on empty stack raises exception',()=>{

    expect(stack.peek()).toEqual('empty stack');
    expect(stack.pop()).toEqual('empty stack');
  });

});


