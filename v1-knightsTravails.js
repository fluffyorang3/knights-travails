import { arrayAdder, positionNode, possibleMoves } from "./helpers.js";

const startPosition = [1, 0];
const endPosition = [7, 7];
let vertexQueue = [];
let foundNode = null;
let moves = [];

console.log(`Start ->${startPosition}`);
console.log(`End ->${endPosition}`);

async function knightMoves() {
  if (vertexQueue.length === 0) {
    let newNode = positionNode();
    newNode.position = startPosition;
    vertexQueue.push(newNode);
  }
  let previousLength = vertexQueue.length;
  for (let element1 of vertexQueue) {
    for (let element2 of possibleMoves) {
      let newNode = positionNode();
      newNode.position = arrayAdder(element1.position, element2);
      newNode.pred = element1;
      if (
        newNode.position[0] >= 0 &&
        newNode.position[0] < 8 &&
        newNode.position[1] >= 0 &&
        newNode.position[1] < 8
      ) {
        if (
          newNode.position[0] === endPosition[0] &&
          newNode.position[1] === endPosition[1]
        ) {
          foundNode = newNode;
          return;
        }
        vertexQueue.push(newNode);
      }
    }
  }
  for (let i = 0; i < previousLength; i++) {
    vertexQueue.shift();
  }
}

async function findKnightMoves() {
  while (foundNode === null) {
    await knightMoves();
  }
  //console.log("Found Node:", foundNode);
  let finalNode = foundNode;
  //console.log("final node", finalNode.position, "final position", endPosition);
  while (
    finalNode.position[0] !== startPosition[0] &&
    finalNode.position[1] !== startPosition[1]
  ) {
    moves.push(finalNode.position);
    finalNode = finalNode.pred;
  }
  moves.push(startPosition);
  console.log("Moves", moves);
  //console.log(vertexQueue);
}

findKnightMoves();
