'use strict';

const binarySearch = (arr, key) =>{

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === key) {
      // found the key
      return middle;
    } else if (arr[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
};

module.exports = binarySearch;
