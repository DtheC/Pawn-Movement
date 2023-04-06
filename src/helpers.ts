import { Coordinate2D } from "./components/interfaces";

export function generateBasicData() {
  const data: Coordinate2D[][] = [];
  // each top level row is a column in the y axis
  // each array inside is a line in the x cartesian plane
  // e.g. data[0][2] is x: 2, y: 0

  // TODO: Move these 8 values to separate file so not hardcoded
  for (let y = 0; y < 8; y++) {
    const row = [];
    for (let x = 0; x < 8; x++) {
      row.push({ x, y, active: y === 0 && x === 0 });
    }
    data.push(row);
  }

  return data;
}

export function addCoordinates(value1: Coordinate2D, value2: Coordinate2D): Coordinate2D {
  return {
    x: value1.x + value2.x,
    y: value1.y + value2.y
  }
}