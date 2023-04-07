import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Coordinate2D, DIR_NORTH, PlayerData } from "../components/interfaces";

const PlayerContext = createContext({} as PlayerContextData);

interface PlayerContextData {
  playerData: PlayerData;
  playerFunctions: {
    setLocation: (val: Coordinate2D) => void;
    setFacing: (val: Coordinate2D) => void;
  };
}

export function PlayerContextWrapper({ children }: PropsWithChildren) {
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [facing, setFacing] = useState(DIR_NORTH);

  const playerState: PlayerContextData = {
    playerData: {
      location,
      facing,
    },
    playerFunctions: {
      setLocation,
      setFacing,
    },
  };

  return (
    <PlayerContext.Provider value={playerState}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
