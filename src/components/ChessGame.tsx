import {
  DIR_NORTH,
  DIR_WEST,
  DIR_SOUTH,
  DIR_EAST,
  Coordinate2D,
  PlayerData,
} from "./interfaces";
import { addCoordinates, generateBasicData } from "../helpers";
import "./ChessGame.css";
import ChessBoard from "./ChessBoard/ChessBoard";
import ChessControls from "./ChessControls";
import { useState } from "react";

export default function ChessGame() {
  const cellData = generateBasicData();
  const [playerData, setPlayerData] = useState<PlayerData>({
    location: { x: 0, y: 0 },
    facing: DIR_NORTH,
  });

  function calculateCanStepForward() {
    const forward = addCoordinates(playerData.location, playerData.facing);
    return (
      forward.x >= 0 && forward.y >= 0 && forward.x > 8 - 1 && forward.y > 8 - 1
    );
  }

  const [canStepForward, setCanStepForward] = useState<boolean>(calculateCanStepForward());

  function handleRotateLeft() {
    let newDirection: Coordinate2D | undefined;
    switch (playerData.facing) {
      case DIR_NORTH:
        newDirection = DIR_WEST;
        break;
      case DIR_WEST:
        newDirection = DIR_SOUTH;
        break;
      case DIR_SOUTH:
        newDirection = DIR_EAST;
        break;
      case DIR_EAST:
        newDirection = DIR_NORTH;
        break;
    }
    if (!newDirection) return;
    setDirection(newDirection);
  }

  function handleRotateRight() {
    let newDirection: Coordinate2D | undefined;
    switch (playerData.facing) {
      case DIR_NORTH:
        newDirection = DIR_EAST;
        break;
      case DIR_EAST:
        newDirection = DIR_SOUTH;
        break;
      case DIR_SOUTH:
        newDirection = DIR_WEST;
        break;
      case DIR_WEST:
        newDirection = DIR_NORTH;
        break;
    }
    if (!newDirection) return;
    setDirection(newDirection);
  }

  function setDirection(newDirection: Coordinate2D) {
    console.log(newDirection);
    setPlayerData({
      ...playerData,
      facing: newDirection,
    });
  }

  function handleStepForward() {
    // TODO: change min to length/height - 1
    setPlayerData({
      ...playerData,
      location: {
        x: Math.min(
          8 - 1,
          Math.max(0, playerData.location.x + playerData.facing.x)
        ),
        y: Math.min(
          8 - 1,
          Math.max(0, playerData.location.y + playerData.facing.y)
        ),
      },
    });
  }

  function handleReportLocation() {}

  return (
    <div>
      <div className="chess-board">
        <ChessBoard cellData={cellData} playerData={playerData} />
      </div>

      <div className="chess-controls">
        <ChessControls
          handleRotateLeft={handleRotateLeft}
          handleRotateRight={handleRotateRight}
          handleStepForward={handleStepForward}
          handleReportLocation={handleReportLocation}
          canStepForward={canStepForward}
        />
      </div>
    </div>
  );
}
