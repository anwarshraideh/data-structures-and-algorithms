const binarySearch = require('../arraybinarysearch.js');

describe('Testing 401 challenge 3', () => {
  test('It should return the index of the value', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toEqual(4);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);

  });
});
