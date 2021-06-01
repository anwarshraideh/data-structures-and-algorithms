'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{

  it ('should return false when there is only one bracket unclosed',()=>{


    expect(multiBracketValidation('()[]]')).toBeFalsy();

  });

//   it ('',()=>{




//   });

//   it ('',()=>{




//   });

//   it ('',()=>{




//   });



});
