"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const DISCRETE_LAPLACE_4 = exports.DISCRETE_LAPLACE_4 = [[0, 1, 0], [1, -4, 1], [0, 1, 0]];

const DISCRETE_LAPLACE_8 = exports.DISCRETE_LAPLACE_8 = [[1, 1, 1], [1, -8, 1], [1, 1, 1]];

const SOBEL_X = exports.SOBEL_X = [[-1, 0, +1], [-2, 0, +2], [-1, 0, +1]];

const SOBEL_Y = exports.SOBEL_Y = [[-1, -2, -1], [0, 0, 0], [+1, +2, +1]];

const SCHARR_X = exports.SCHARR_X = [[3, 0, -3], [10, 0, -10], [3, 0, -3]];

const SCHARR_Y = exports.SCHARR_Y = [[3, 10, 3], [0, 0, 0], [-3, -10, -3]];

const SECOND_DERIVATIVE = exports.SECOND_DERIVATIVE = [[-1, -2, 0, 2, 1], [-2, -4, 0, 4, 2], [0, 0, 0, 0, 0], [1, 2, 0, -2, -1], [2, 4, 0, -4, -2]];

const SECOND_DERIVATIVE_INV = exports.SECOND_DERIVATIVE_INV = [[1, 2, 0, -2, -1], [2, 4, 0, -4, -2], [0, 0, 0, 0, 0], [-2, -4, 0, 4, 2], [-1, -2, 0, 2, 1]];