'use strict';

// Complete this algo

const binarySearch = (array, target) => {
  const middleIndex = Math.floor(array.length / 2.0);

  if (target === array[middleIndex]) {
    return true;
  } else if (array.length <= 1) {
    return false;
  } else if (target > array[middleIndex]) {
    return binarySearch(array.slice(middleIndex + 1), target);
  } else if (target < array[middleIndex]) {
    return binarySearch(array.slice(0, middleIndex), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch2 = (array, target, startIndex, endIndex) => {
  startIndex = startIndex || 0;
  endIndex = endIndex || array.length - 1;

  const middleIndex = Math.floor((endIndex + startIndex) / 2.0);

  console.log(middleIndex);

  if (target === array[middleIndex]) {
    return true;
  } else if (startIndex > endIndex) {
    return false;
  } else if (target > array[middleIndex]) {
    return binarySearch(array, target, middleIndex + 1, endIndex);
  } else if (target < array[middleIndex]) {
    return binarySearch(array, target, startIndex, middleIndex - 1);
  }
};

module.exports = binarySearch;
