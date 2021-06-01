// 'use strict';

// const multiBracketValidation = require('../multiBracketValidation.js');

// describe ('test multi Bracket Validation',() =>{

//   it (' return true if all brackets closed ',()=>{

//     expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();

//   });


//   it ('return false  if there is only one bracket unclosed',() =>{


//     expect(multiBracketValidation('()[]]')).toBeFalsy();

//   });






// });

'use strict';

const multiBracketValidation = require ('../multiBracketValidation.js');

test('“Happy Path” - Expected outcome', () => {

  expect(multiBracketValidation('()[[Extra Characters]]') ).toBeTruthy();
});

test('“Happy Path” - Expected outcome', () => {

  expect(multiBracketValidation('()[][')).toBeFalsy();
});
test('Edge Case (return false if all input open brackets)', () => {

  expect(multiBracketValidation('([{')).toBeFalsy();
});
