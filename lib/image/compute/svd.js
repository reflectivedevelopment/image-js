'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSvd;

var _mlMatrix = require('ml-matrix');

/**
 * TODO would be suprised if this stuff works
 * @memberof Image
 * @instance
 * @return {object} SVD result
 */
function getSvd() {
  this.checkProcessable('getSvd', {
    bitDepth: [1]
  });

  return new _mlMatrix.SVD(this.points);
}