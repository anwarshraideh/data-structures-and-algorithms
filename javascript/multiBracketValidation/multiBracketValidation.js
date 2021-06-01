// 'use strict';

// const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');


// let stack = new Stack();

// function multiBracketValidation(input){

//   let Input = input.split('');
//   let openBracket;

//   for (let i = 0 ; i < Input.length ; i++) {

//     if ( Input[i] ==='[' || Input[i] ==='{' || Input[i] ==='(' ){

//       stack.push(Input[i]);

//     } else if (Input[i] ===']' || Input[i] ==='}' || Input[i] ===')' )

//     {

//       openBracket = stack.peek() + Input[i];

//       if ( openBracket === '{}' || openBracket === '[]' || openBracket === '()' )
//       {
//         stack.pop();
//       }
//       else
//       {
//         return false;
//       }

//     }

//   }

//   return stack.length === 0;



// }


// module.exports = multiBracketValidation;

'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;


function multiBracketValidation(input) {
  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i]);
    }
    if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      const openBracket = stack.pop();
      if (openBracket === '(' && input[i] === '(') {
        console.log(false);
        return false;
      }
      if (openBracket === '[' && input[i] === '[') {
        console.log(false);
        return false;
      }
      if (openBracket === '{' && input[i] === '{') {
        console.log(false);
        return false;
      }
    }
  }
  if (stack.length > 0) {
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
}


module.exports = multiBracketValidation;
