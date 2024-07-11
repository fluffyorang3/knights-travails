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

function arrayAdder(arr1, arr2) {
  const sum = arr1.map(function (num, idx) {
    return num + arr2[idx];
  });
  return sum;
}
