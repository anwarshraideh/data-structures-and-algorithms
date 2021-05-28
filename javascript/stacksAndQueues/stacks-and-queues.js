'use strict';

class Node
{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stack {

  constructor(){
    this.top=null;
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
      return 'Empty stack';
    }


  }

  peek()
  {
    if (this.top){
      return this.top.value;
    }
    return 'Empty stack';
  }

  isEmpty ()
  {
    if (this.top){
      return false;
    }
    return true ;
  }



}

module.exports = Stack ;




