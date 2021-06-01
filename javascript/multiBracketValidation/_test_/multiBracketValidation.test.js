'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{


  it ('return false if there is only one bracket unclosed',() =>{


    expect(multiBracketValidation('()[]]')).toBeFalsy();
   
  });

  it("return false if the brackets are open:", () => {
    expect(multiBracketValidation('([{')).toBeFalsy();


});


