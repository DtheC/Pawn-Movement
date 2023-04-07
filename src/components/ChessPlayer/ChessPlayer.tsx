import { DIR_EAST, DIR_NORTH, DIR_SOUTH, DIR_WEST } from "../../constants";
import { usePlayerContext } from "../../context/PlayerContext";
import "./ChessPlayer.css";

export default function ChessPlayer() {
  const { facing } = usePlayerContext();
  const r = getRotationValue();

  function getRotationValue() {
    switch (facing) {
      case DIR_NORTH:
        return 0;
      case DIR_EAST:
        return 90;
      case DIR_SOUTH:
        return 180;
      case DIR_WEST:
      default:
        return -90;
    }
  }

  return (
    <div className="player-container">
      <div
        className="player-arrow-container"
        style={{ transform: `rotate(${r}deg)` }}
      >
        <div className="player-arrow"> ^ </div>
      </div>
    </div>
  );
}
