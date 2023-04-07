import { usePlayerContext } from "../../context/PlayerContext";
import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { Coordinate2D } from "../interfaces";
import "./ChessCell.css";

export default function ChessCell({
  cellPosition,
}: {
  cellPosition: Coordinate2D;
}) {
  const { location } = usePlayerContext();
  const containsPlayer =
    cellPosition.x === location.x &&
    cellPosition.y === location.y;
  return (
    <div className={`chess-game-cell ${containsPlayer ? "active" : ""}`}>
      {containsPlayer && <ChessPlayer />}
    </div>
  );
}
