'use strict';

const { Stack } = require('../stacks-and-queues');
const stack = new Stack();


describe ('stack testing',()=>{

  it('Can successfully push onto a stack',()=>{

    stack.push(6);
    expect(stack.top.value).toEqual(6);
  });

  it('Can successfully push multiple values onto a stack',()=>{

    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });


});


