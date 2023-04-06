import { dir } from "console";
import {
  DirEast,
  DirNorth,
  DirSouth,
  DirWest,
  PlayerDirection,
} from "../interfaces";
import "./ChessPlayer.css";
import { useEffect, useState } from "react";

export default function ChessPlayer({
  direction,
}: {
  direction: PlayerDirection;
}) {
  const [rotationValue, setRotationValue] = useState(0);

  useEffect(() => {
    switch (direction) {
      case DirNorth:
        setRotationValue(0);
        break;
      case DirEast:
        setRotationValue(90);
        break;
      case DirSouth:
        setRotationValue(180);
        break;
      case DirWest:
        setRotationValue(-90);
        break;
    }
  }, [direction]);

  return (
    <div className="player-container">
      <div
        className="player-arrow-container"
        style={{ transform: `rotate(${rotationValue}deg)` }}
      >
        <div className="player-arrow"> ^ </div>
      </div>
    </div>
  );
}
