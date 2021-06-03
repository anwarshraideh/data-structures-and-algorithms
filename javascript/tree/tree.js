'use strict';

const Node = require('./node.js');

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
}


class BinarySearchTree {

  constructor ( root = null){
    this.root = root ;
  }

  add(value){

    let node = new Node(value);

    if (this.root === null) this.root = node ;


    let traverse = (node) =>{

      if (value < node.value){
        if (node.left === null ){
          node.left = node ;
        }
        traverse(node.left);
      }
      else if (value > node.value){
        if (node.right === null ) {
          node.right = node ;
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




module.exports = { BinaryTree , BinarySearchTree };
