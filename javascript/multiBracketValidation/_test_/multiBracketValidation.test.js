'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{


  it('return false if  it only opend brackets  ', () => {

    expect(multiBracketValidation('({((')).toBeFalsy();

  });


  it('return false if there is a bracket not complete ', () => {

    expect(multiBracketValidation('(){}[')).toBeFalsy();

  });

  it ('return true if the bracket completed',() =>{


    expect(multiBracketValidation('(){}[]')).toBeTruthy();

  });
});


