'use strict';

const reverseArray = (arr) => {

  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = reverseArray ;
