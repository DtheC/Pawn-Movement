import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { ChessCellData, PlayerDirection } from "../interfaces";
import "./ChessCell.css";

export default function ChessCell({
  chessCellData,
  playerDirection
}: {
  chessCellData: ChessCellData; playerDirection: PlayerDirection
}) {
  return (
    <div className={`chess-game-cell ${chessCellData.active ? "active" : ""}`}>
      {chessCellData.active && <ChessPlayer direction={playerDirection} />}
    </div>
  );
}
