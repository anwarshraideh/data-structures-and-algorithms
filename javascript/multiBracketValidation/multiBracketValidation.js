'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');


let stack = new Stack();

function multiBracketValidation(input){

  let Input = input.split('');
  let openBracket;

  for (let i = 0 ; i < Input.length ; i++) {

    if ( Input[i] ==='[' || Input[i] ==='{' || Input[i] ==='(' ){

      stack.push(Input[i]);

    } else if (Input[i] ===']' || Input[i] ==='}' || Input[i] ===')' )

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

  if (stack.length > 0) {
    return false;
  } else if (stack.length === 0){
    return true;
  }
  
  //   return stack.length === 0;


}

module.exports = multiBracketValidation;





