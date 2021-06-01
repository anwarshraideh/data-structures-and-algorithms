'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe ('test multi Bracket Validation',() =>{

  it (' return true if all brackets closed ',()=>{

    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();


  });


  it ('return false  if there is only one bracket unclosed',()=>{


    expect(multiBracketValidation('()[]]')).toBeFalsy();

  });



  it ('return false  if all brackets opended',()=>{

    expect(multiBracketValidation( '([{' )).toBeFalsy();


  });



});
