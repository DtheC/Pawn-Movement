import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Coordinate2D } from "../components/interfaces";
import { addCoordinates } from "../helpers";
import { DIR_NORTH, DIR_WEST, DIR_SOUTH, DIR_EAST, BOARD_WIDTH, BOARD_HEIGHT } from "../constants";

const PlayerContext = createContext({} as PlayerContextData);

interface PlayerContextData {
  playerLocation: Coordinate2D;
  setPlayerLocation: (val: Coordinate2D) => void;
  playerFacing: Coordinate2D;
  setPlayerFacing: (val: Coordinate2D) => void;
  playerCanStepForward: boolean;
  setPlayerCanStepForward: (val: boolean) => void;
  playerTurnLeft: () => void,
  playerTurnRight: () => void,
  playerMove: () => void,
}

export function PlayerContextWrapper({ children }: PropsWithChildren) {
  const [playerLocation, setPlayerLocation] = useState({ x: 0, y: 0 });
  const [playerFacing, setPlayerFacing] = useState(DIR_NORTH);
  const [playerCanStepForward, setPlayerCanStepForward] = useState(false);

  const playerState: PlayerContextData = {
    playerLocation,
    setPlayerLocation,
    playerFacing,
    setPlayerFacing,
    playerCanStepForward,
    setPlayerCanStepForward,
    playerTurnLeft: turnLeft,
    playerTurnRight: turnRight,
    playerMove,
  };

  useEffect(() => {
    const forward = addCoordinates(playerLocation, playerFacing);
    setPlayerCanStepForward(
      forward.x >= 0 && forward.y >= 0 && forward.x < BOARD_WIDTH && forward.y < BOARD_HEIGHT
    );
  }, [playerLocation, playerFacing]);

  function turnLeft() {
    let newDirection: Coordinate2D | undefined;
    switch (playerFacing) {
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

  function turnRight() {
    let newDirection: Coordinate2D | undefined;
    switch (playerFacing) {
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
    setPlayerFacing(newDirection);
  }

  function playerMove() {
    setPlayerLocation({
      x: Math.min(BOARD_WIDTH - 1, Math.max(0, playerLocation.x + playerFacing.x)),
      y: Math.min(BOARD_HEIGHT - 1, Math.max(0, playerLocation.y + playerFacing.y)),
    });
  }

  return (
    <PlayerContext.Provider value={playerState}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
