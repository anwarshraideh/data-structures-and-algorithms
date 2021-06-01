// 'use strict';

// const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');


// let stack = new Stack();

// function multiBracketValidation(input){

//   let Input = input.split('');
//   let openBracket;

//   for (let i = 0 ; i < Input.length ; i++) {

//     if ( Input[i] ==='[' || Input[i] ==='{' || Input[i] ==='(' ){

//       stack.push(Input[i]);


//     }

//     else if (Input[i] ===']' || Input[i] ==='}' || Input[i] ===')' )

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

//   return true ;




// }


// module.exports = multiBracketValidation;



'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

let multiBracketValidation = function (str) {
  let stack = new Stack();
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {

    // If character is an opening brace add it to a stack
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      stack.push(str[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (str[i] !== map[last]) {return false;}
      // else  {return true;}
    }
  }
 
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {return false;}
  else if (stack.length === 0){ return true;}

 
};

module.exports = multiBracketValidation;
