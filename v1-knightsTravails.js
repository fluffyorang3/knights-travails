import { arrayAdder, positionNode, possibleMoves } from "./helpers.js";

const startPosition = [3, 3];
const endPosition = [7, 1];
let vertexQueue = [];
let lengthCounter = 0;

function knightMoves() {
  lengthCounter++;
  if (vertexQueue.length === 0) {
    let newNode = positionNode();
    newNode.position = startPosition;
    vertexQueue.push(newNode);
  }
  let previousLength = vertexQueue.length;
  vertexQueue.forEach((element1) => {
    possibleMoves.forEach((element2) => {
      let newNode = positionNode();
      newNode.position = arrayAdder(element1.position, element2);
      newNode.length = lengthCounter;
      newNode.pred = element1.position;
      if (
        newNode.position[0] >= 0 &&
        newNode.position[0] < 8 &&
        newNode.position[1] >= 0 &&
        newNode.position[1] < 8
      ) {
        vertexQueue.push(newNode);
      }
    });
  });
  for (let i = 0; i < previousLength; i++) {
    vertexQueue.shift();
  }
  console.log(vertexQueue);
}

knightMoves();
knightMoves();
