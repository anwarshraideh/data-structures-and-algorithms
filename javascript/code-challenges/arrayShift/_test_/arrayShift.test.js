const insertShiftArray = require('../arrayShift.js');

describe('Testing 401 challenge 2', () => {
  test('It should return the same  array but included in the middle the value', () => {
    expect(insertShiftArray([2,4,6,-8], 5)).toStrictEqual([2,4,5,6,-8]);
    expect(insertShiftArray([42,8,15,23,42], 16)).toStrictEqual([42,8,15,16,23,42]);

  });
});

