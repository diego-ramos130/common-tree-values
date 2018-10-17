'use strict';

const Node = require('./Node');

module.exports = class Tree {
  constructor(rootVal) {
    this.root = new Node(rootVal);
  }
};
