import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { PlayerData } from "../interfaces";
import "./ChessCell.css";

export default function ChessCell({
  showPlayer,
  playerData,
}: {
  showPlayer: boolean;
  playerData: PlayerData;
}) {
  return (
    <div className={`chess-game-cell ${showPlayer ? "active" : ""}`}>
      {showPlayer && <ChessPlayer playerData={playerData} />}
    </div>
  );
}
