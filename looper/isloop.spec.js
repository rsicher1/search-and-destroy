'use strict';
const { expect } = require('chai');
const LinkedList = require('./linkedlist');
const { isLoop, findLoop } = require('./isloop');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const emojis = ['🥚', '🐣', '🦅 ', '👾'];
const emojisOdd = ['🥚', '🐣', '🦅 ', '👾', '👾'];

//These LLs have loops!
const test1 = new LinkedList();
test1.addToHead(0);
numbers.forEach(val => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

const test2 = new LinkedList();
test2.addToHead('z');
letters.forEach(letter => test2.addToTail(letter));
test2.getNthNode(9).next = test2.getNthNode(1);

// This LL has no loop!
const test3 = new LinkedList();
test3.addToHead('📺');
emojis.forEach(el => test3.addToTail(el));

const test4 = new LinkedList();
test4.addToHead('📺');
emojisOdd.forEach(el => test4.addToTail(el));

describe('isLoop function', () => {
  // Feel free to write a few tests of your own! :)
  it('returns true if linked list contains a loop', () => {
    expect(isLoop(test1)).to.equal(true);
    expect(isLoop(test2)).to.equal(true);
  });

  it('returns false if linked list contains no loop', () => {
    expect(isLoop(test3)).to.equal(false);
    expect(isLoop(test4)).to.equal(false);
  });
});

describe('findLoop function', () => {
  // Feel free to write a few tests of your own! :)
  it('returns Node value at start of loop', () => {
    expect(findLoop(test1)).to.equal(2);
    expect(findLoop(test2)).to.equal('z');
  });
});
