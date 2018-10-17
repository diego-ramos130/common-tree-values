'use strict'; 

module.exports = function commonValues(binaryTree, binaryTreeTwo) {
  const aMap = new Map();
  const common = new Map();
  (function traverseAMap(root) {
    if (root === null) {
      return undefined;
    }
    aMap.set(root.value, true);
    traverseAMap(root.left);
    traverseAMap(root.right);
    return undefined;
  }(binaryTree.root));
  (function traverseAndCompareBMap(root) {
    if (root === null) {
      return undefined;
    }
    if (aMap.get(root.value) && !common.get(root.value)) {
      common.set(root.value, true);
    }
    traverseAndCompareBMap(root.left);
    traverseAndCompareBMap(root.right);
    return undefined;
  }(binaryTreeTwo.root));
  return common;
};
