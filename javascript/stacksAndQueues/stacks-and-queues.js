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

class Queue {

  constructor (){
    this.front =null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    if (this.isEmpty())
    {
      this.front =node;
      this.rear = node;
    }
    else{
      this.rear.next = node;
      this.rear = node;

    }
  }

  dequeue(){
    if (this.isEmpty())
      return 'empty queue';

    let temp = this.front;
    this.front=temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){

    if (this.isEmpty)
      return 'empty queue';

    return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }

}

module.exports = {
  Stack ,
  Queue,
};




