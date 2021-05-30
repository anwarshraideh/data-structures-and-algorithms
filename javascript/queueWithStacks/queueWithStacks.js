'use strict';

class Node
{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  push(value)
  {

    let node = new Node (value);

    if (!this.top)
      this.top=node;
    else
    {
      node.next=this.top;
      this.top=node;
    }

  }

  pop()
  {
    if (this.top)
    {
      let temp = this.top;
      this.top=temp.next;
      temp.next=null;
      return temp.value;

    }
    else
    {
      return 'empty stack';
    }


  }

  peek()
  {
    if (this.top){
      return this.top.value;
    }
    return 'empty stack';
  }

  isEmpty ()
  {
    if (this.top){
      return false;
    }
    return true ;
  }

}

class PseudoQueue {

  constructor() {

    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value) {

    this.firstStack.push(value);

  }
  dequeue() {

    if (this.secondStack.isEmpty() && !this.firstStack.isEmpty()) {
      while (this.firstStack.top) {
        this.secondStack.push(this.firstStack.top.value);
        this.firstStack.top = this.firstStack.top.next;
      }
      this.secondStack.pop();
    } else if (this.firstStack.isEmpty() && this.secondStack.isEmpty()) {
      return ' empty queue';
    } else {
      this.secondStack.pop();
    }
  }
}

module.exports = PseudoQueue;
