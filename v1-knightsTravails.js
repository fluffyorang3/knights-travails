import { arrayAdder, positionNode } from "./helpers.js";

const startPosition = [3, 3];
const endPosition = [7, 1];
const vertexQueue = [];

const possibleMoves = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
];
