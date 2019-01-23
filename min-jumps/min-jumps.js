'use strict';

// Complete this algo
const minJumps = arr => {
  const minJumpsAtIndexes = new Array(arr.length).fill(Infinity);
  minJumpsAtIndexes[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] + j >= i) {
        minJumpsAtIndexes[i] = Math.min(
          minJumpsAtIndexes[j] + 1,
          minJumpsAtIndexes[i]
        );
      }
    }
  }
  return minJumpsAtIndexes[arr.length - 1];
};

module.exports = minJumps;
