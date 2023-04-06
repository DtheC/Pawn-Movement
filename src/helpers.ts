import { ChessCell } from "./components/interfaces";

export function generateBasicData() {
  const data: ChessCell[][] = [];
  // each top level row is a column in the y axis
  // each array inside is a line in the x cartesian plane
  // e.g. data[0][2] is x: 2, y: 0


  // TODO: Move these values to separate file so not hardcoded
  for (let y = 0; y < 8; y++) {
    const row = [];
    for (let x = 0; x < 8; x++) {
      row.push({ x, y, active: false });
    }
    data.push(row);
  }

  return data;
}