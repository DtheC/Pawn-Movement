export interface Coordinate2D {
  x: number;
  y: number;
}

export const DIR_NORTH: Coordinate2D = { x: 0, y: -1 };
export const DIR_SOUTH: Coordinate2D = { x: 0, y: 1 };
export const DIR_EAST: Coordinate2D = { x: 1, y: 0 };
export const DIR_WEST: Coordinate2D = { x: -1, y: 0 };