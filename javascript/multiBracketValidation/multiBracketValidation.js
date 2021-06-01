'use strict';


let multiBracketValidation = function (input) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < input.length; i++) {

    if (input[i] === '(' || input[i] === '{' || input[i] === '[' ) {
      stack.push(input[i]);
    }
    else {
      let last = stack.pop();

      if (input[i] !== map[last]) {return false;}
    }
  }

  if (stack.length !== 0) {return false;}

  return true;


};

module.exports = multiBracketValidation;
