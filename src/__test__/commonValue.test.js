'use strict';

const commonValue = require('../lib/commonValue');
const Node = require('../lib/Node');
const Tree = require('../lib/Tree');

const tree = new Tree(5);
tree.root.left = new Node(3);
tree.root.right = new Node(15);

const messedUpTree = new Tree(1);
messedUpTree.root.left = new Node(2);
messedUpTree.root.right = new Node(4);

const real = new Tree(1);
real.root.right = new Node(3);
real.root.left = new Node(5);
real.root.right.right = new Node(15);
real.root.right.left = new Node(4);
real.root.left.left = new Node(2);

const reallyReal = new Tree(1);
reallyReal.root.right = new Node(3);
reallyReal.root.left = new Node(5);
reallyReal.root.right.right = new Node(15);
reallyReal.root.right.left = new Node(4);
reallyReal.root.left.left = new Node(2);
reallyReal.root.left.left.left = new Node(2);


describe('commonValue.js', () => {
  test('happy path: expect 1,2,4', () => {
    const result = commonValue(messedUpTree, real);
    const resultMap = new Map();
    resultMap.set(1, true).set(2, true).set(4, true);
    expect(result).toEqual(resultMap);
  });
  test('unhappy path: throw trees that don\'t have matching numbers', () =>  {
    const result = commonValue(messedUpTree, tree);
    const resultMap = new Map();
    expect(result).toEqual(resultMap);
  });
  test('behavior check: expect dupes to not exist in an array.', () => {
    const result = commonValue(messedUpTree, reallyReal);
    const resultMap = new Map();
    resultMap.set(1, true).set(2, true).set(4, true);
    expect(result).toEqual(resultMap);
  });
});
