'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{


  it ('return false  if there is only one bracket unclosed',() =>{


    expect(multiBracketValidation('()[]]')).toBeFalsy();
    expect(multiBracketValidation('([{')).toBeFalsy();
  });


});


