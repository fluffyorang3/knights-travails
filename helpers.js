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

function positionNode(position = null, length = null, pred = null) {
  return {
    position,
    length,
    pred,
  };
}

export { arrayAdder, positionNode };
