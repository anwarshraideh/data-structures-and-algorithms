'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{


  // it ('return false if there is only one bracket unclosed',() =>{


  //   expect(multiBracketValidation('()[]]')).toBeFalsy();

  // });


  // it('return true if the brackets are completed', () => {
  //   expect(multiBracketValidation('()[]{}')).toBeTruthy();


  // });

  // it ('return false if there is only one bracket unclosed',() =>{


  //   expect(multiBracketValidation('(){}')).toBeTruthy();

  // });

  // it('return true if the brackets are completed', () => {
  //   expect(multiBracketValidation('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]')).toBeTruthy();


  // });

  it('return false if  it only opend brackets  ', () => {

    expect(multiBracketValidation('({((')).toBeFalsy();

  });



  it('return false if there is a bracket not complete ', () => {

    expect(multiBracketValidation('(){}[')).toBeFalsy();

  });
});


