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
  location: Coordinate2D;
  facing: Coordinate2D;
  setLocation: (val: Coordinate2D) => void;
  setFacing: (val: Coordinate2D) => void;
  canStepForward: boolean;
  setCanStepForward: (val: boolean) => void;
  handleRotateLeft: () => void,
  handleRotateRight: () => void,
  handleStepForward: () => void,
  setDirection: (val: Coordinate2D) => void,
}

export function PlayerContextWrapper({ children }: PropsWithChildren) {
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [facing, setFacing] = useState(DIR_NORTH);
  const [canStepForward, setCanStepForward] = useState(false);

  const playerState: PlayerContextData = {
    location,
    facing,
    setLocation,
    setFacing,
    canStepForward,
    setCanStepForward,
    handleRotateLeft,
    handleRotateRight,
    handleStepForward,
    setDirection,
  };

  useEffect(() => {
    const forward = addCoordinates(location, facing);
    setCanStepForward(
      forward.x >= 0 && forward.y >= 0 && forward.x < BOARD_WIDTH && forward.y < BOARD_HEIGHT
    );
  }, [location, facing]);

  function handleRotateLeft() {
    let newDirection: Coordinate2D | undefined;
    switch (facing) {
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
    switch (facing) {
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
    setFacing(newDirection);
  }

  function handleStepForward() {
    setLocation({
      x: Math.min(BOARD_WIDTH - 1, Math.max(0, location.x + facing.x)),
      y: Math.min(BOARD_HEIGHT - 1, Math.max(0, location.y + facing.y)),
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
