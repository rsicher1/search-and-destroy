'use strict';

//Complete this algo
const isLoop = linkedList => {
  let slowerListNode = linkedList.head;
  let fasterListNode = linkedList.head.next;

  while (fasterListNode) {
    if (slowerListNode === fasterListNode) {
      return true;
    }

    slowerListNode = slowerListNode.next;
    fasterListNode = fasterListNode.next
      ? fasterListNode.next.next
      : fasterListNode.next;
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

// O(n) space complexity / 0(n) time complexity
const findLoop = linkedList => {
  let currentNode = linkedList.head;
  while (currentNode) {
    if ('visited' in currentNode) {
      return currentNode.value;
    }
    currentNode.visited = true;

    currentNode = currentNode.next;
  }

  return false;
};

module.exports = { isLoop, findLoop };
