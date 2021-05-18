const binarySearch = require('../arraybinarysearch.js');

describe('Testing 401 challenge 1', () => {
  test('It should return a array of reversed value', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
    expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toStrictEqual(4);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);

  });
});
