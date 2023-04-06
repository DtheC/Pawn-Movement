import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { ChessCellData, PlayerDirection } from "../interfaces";
import "./ChessBoard.css";
import ChessCell from "./ChessCell";

export default function ChessBoard({
  cellData,
  playerDirection
}: {
  cellData: ChessCellData[][];
  playerDirection: PlayerDirection
}) {
  // Set count of columns based on length of row
  const gridColumns = "1fr ".repeat(cellData[0] ? cellData[0].length : 1);

  const cells = cellData.map((col, colIndex) =>
    col.map((rowCell, rowIndex) => (
      <ChessCell key={`${colIndex}-${rowIndex}`} chessCellData={rowCell} playerDirection={playerDirection} />
    ))
  );

  return (
    <div
      className={"chess-game-container"}
      style={{ gridTemplateColumns: gridColumns }}
    >
      {cells}
    </div>
  );
}
