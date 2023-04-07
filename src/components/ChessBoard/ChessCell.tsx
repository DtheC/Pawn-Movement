import { usePlayerContext } from "../../context/PlayerContext";
import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { Coordinate2D } from "../interfaces";
import "./ChessCell.css";

export default function ChessCell({
  cellPosition,
}: {
  cellPosition: Coordinate2D;
}) {
  const { playerLocation } = usePlayerContext();
  const containsPlayer =
    cellPosition.x === playerLocation.x && cellPosition.y === playerLocation.y;

  // If we're on an even row then colour even squares, otherwise colour odd
  const isAltColor =
    cellPosition.y % 2 === 0
      ? cellPosition.x % 2 === 0
      : cellPosition.x % 2 !== 0;
  return (
    <div
      className={`chess-game-cell ${containsPlayer ? "active" : ""} ${
        isAltColor ? "dark" : ""
      }`}
    >
      {containsPlayer && <ChessPlayer />}
    </div>
  );
}
