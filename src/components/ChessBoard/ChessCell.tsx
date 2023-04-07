import { usePlayerContext } from "../../context/PlayerContext";
import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { Coordinate2D, PlayerData } from "../interfaces";
import "./ChessCell.css";

export default function ChessCell({
  cellPosition,
}: {
  cellPosition: Coordinate2D;
}) {
  const { playerData } = usePlayerContext();
  const containsPlayer =
    cellPosition.x === playerData.location.x &&
    cellPosition.y === playerData.location.y;
  return (
    <div className={`chess-game-cell ${containsPlayer ? "active" : ""}`}>
      {containsPlayer && <ChessPlayer playerData={playerData} />}
    </div>
  );
}
