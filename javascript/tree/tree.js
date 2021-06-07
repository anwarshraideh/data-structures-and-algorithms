'use strict';

const Node = require('./node.js');
const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class BinaryTree {


  constructor(root = null){
    this.root = root;
  }

  preOrder(){

    let result = [];
    let traverse = (node) =>{
      result.push(node.value);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;

  }


  inOrder(){
    let result = [];

    let traverse = (node) =>{

      if (node.left) traverse(node.left);

      result.push(node.value);

      if (node.right) traverse(node.right);

    };
    traverse(this.root);
    return result;

  }

  postOrder()
  {
    let result = [];

    let traverse = (node) =>{

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      result.push(node.value);

    };
    traverse(this.root);
    return result;

  }

  findMaximum()
  {
    let max = 0;
    if (!this.root) {
      return null ;
    }
    let newArray = this.inOrder();
    for (let index = 0; index < newArray.length; index++) {
      if (max < newArray[index] )
      {
        max = newArray[index] ;
      }

    }
    return max ;

  }

  breadthFirst(){
    let queue = new Queue();
    let treeValues = [];

    if (!this.root) {
      return null;
    } else {
      queue.enqueue(this.root);
    }

    while (queue.length !== 0){

      let front = queue.dequeue();
      treeValues.push(front.value);
      if (front.left) queue.enqueu(front.left);
      if (front.right) queue.enqueue(front.right);
    }
    return treeValues;

  }

}




class BinarySearchTree {

  constructor ( root = null){
    this.root = root ;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    const traverse = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        }
        traverse(node.left);
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
  }


  contains (value) {
    if (!this.root)
      return null ;

    else
    {
      let root =this.root ;

      while (root) {
        if (value === root.value) return true ;
        if (value < root.value) root = root.left ;
        else root = root.right ;

      }
      return false ;
    }
  }

}




module.exports = { BinaryTree , BinarySearchTree , Node };
