function arrayAdder(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Arrays must be of the same length");
  } else {
    const sum = arr1.map(function (num, idx) {
      return num + arr2[idx];
    });
    return sum;
  }
}

function positionNode(position = null, pred = null) {
  return {
    position,
    pred,
  };
}

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

export { arrayAdder, positionNode, possibleMoves };
