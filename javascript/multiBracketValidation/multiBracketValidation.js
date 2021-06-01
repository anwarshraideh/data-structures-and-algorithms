'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');


let stack = new Stack();

function multiBracketValidation(input){

  let Input = input.split('');
  let openBracket;

  for (let i = 0 ; i < Input.length ; i++) {

    if ( Input[i] ==='[' || Input[i] ==='{' || Input[i] ==='(' ){

      stack.push(Input[i]);
      return false;

    }

    else if (Input[i] ===']' || Input[i] ==='}' || Input[i] ===')' )

    {

      openBracket = stack.peek() + Input[i];

      if ( openBracket === '{}' || openBracket === '[]' || openBracket === '()' )
      {
        stack.pop();

      }
      else
      {
        return false;
      }

    }

  }

  return true;



}


module.exports = multiBracketValidation;

