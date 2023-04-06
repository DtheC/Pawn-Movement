export interface ChessCellData {
  x: number;
  y: number;
  active: boolean;
}

export interface PlayerDirection {
  x: number;
  y: number;
}

export const DirNorth: PlayerDirection = { x: 0, y: -1 };
export const DirSouth: PlayerDirection = { x: 0, y: 1 };
export const DirEast: PlayerDirection = { x: 1, y: 0 };
export const DirWest: PlayerDirection = { x: -1, y: 0 };