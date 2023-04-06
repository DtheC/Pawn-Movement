import {
  DirNorth,
  DirWest,
  DirSouth,
  DirEast,
  PlayerDirection,
} from "./interfaces";
import { generateBasicData } from "../helpers";
import "./ChessGame.css";
import ChessBoard from "./ChessBoard/ChessBoard";
import ChessControls from "./ChessControls";
import { useEffect, useState } from "react";

export default function ChessGame() {
  const [cellData, setCellData] = useState(generateBasicData());
  const [playerCoordinates, setPlayerCoordinates] = useState({ x: 0, y: 0 });
  const [playerDirection, setPlayerDirection] = useState(DirNorth);

  function handleRotateLeft() {
    let newDirection: PlayerDirection | undefined;
    switch (playerDirection) {
      case DirNorth:
        newDirection = DirWest;
        break;
      case DirWest:
        newDirection = DirSouth;
        break;
      case DirSouth:
        newDirection = DirEast;
        break;
      case DirEast:
        newDirection = DirNorth;
        break;
    }
    if (!newDirection) return;
    setDirection(newDirection);
  }

  function handleRotateRight() {
    let newDirection: PlayerDirection | undefined;
    switch (playerDirection) {
      case DirNorth:
        newDirection = DirEast;
        break;
      case DirEast:
        newDirection = DirSouth;
        break;
      case DirSouth:
        newDirection = DirWest;
        break;
      case DirWest:
        newDirection = DirNorth;
        break;
    }
    if (!newDirection) return;
    setDirection(newDirection);
  }

  function setDirection(newDirection: PlayerDirection) {
    setPlayerDirection(newDirection);
  }

  function handleStepForward() {
    setPlayerCoordinates({
      x: playerCoordinates.x + playerDirection.x,
      y: playerCoordinates.y + playerDirection.y,
    });
    // TODO: Constrain to stop falling off edges
  }

  function handleReportLocation() {}

  useEffect(() => {
    const newCellData = cellData.map((col) =>
      col.map((row) => {
        return {
          ...row,
          active: false,
        };
      })
    );
    newCellData[playerCoordinates.y][playerCoordinates.x].active = true;
    setCellData(newCellData);
  }, [playerCoordinates, playerDirection]);

  return (
    <div>
      <div className="chess-board">
        <ChessBoard cellData={cellData} playerDirection={playerDirection} />
      </div>

      <div className="chess-controls">
        <ChessControls
          handleRotateLeft={handleRotateLeft}
          handleRotateRight={handleRotateRight}
          handleStepForward={handleStepForward}
          handleReportLocation={handleReportLocation}
        />
      </div>
    </div>
  );
}
