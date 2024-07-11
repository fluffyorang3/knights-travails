let startingArray = [[3, 3]];

let holder = [];

function knightMoves(startingArray, end) {
  let possibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  function sumArrays(array1, array2) {
    if (array1.length !== array2.length) {
      throw new Error("Arrays must be of the same length");
    }

    return array1.map((num, index) => num + array2[index]);
  }

  possibleMoves.forEach((element1) => {
    startingArray.forEach((element2) => {
      let pm = sumArrays(element1, element2);
      if (pm[0] < 8 && pm[0] > 0 && pm[1] < 8 && pm[1] > 0) {
        if (pm === end) {
          console.log("Found it");
          return;
        }
        holder.push(pm);
      }
      if (pm === end) {
        console.log("Found it");
        return;
      }
    });
  });
  console.log("holder", holder);
}

knightMoves(startingArray, [4, 5]);
knightMoves(holder, [4, 5]);
