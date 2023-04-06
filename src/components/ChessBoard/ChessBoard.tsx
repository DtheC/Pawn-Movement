import { Coordinate2D, PlayerData } from "../interfaces";
import "./ChessBoard.css";
import ChessCell from "./ChessCell";

export default function ChessBoard({
  cellData,
  playerData,
}: {
  cellData: Coordinate2D[][];
  playerData: PlayerData,
}) {
  // Set count of columns based on length of row
  const gridColumnsStyle = "1fr ".repeat(cellData[0] ? cellData[0].length : 1);

  const cells = cellData.map((col, colIndex) =>
    col.map((rowCell, rowIndex) => (
      <ChessCell
        key={`${colIndex}-${rowIndex}`}
        showPlayer={
          rowCell.x === playerData.location.x && rowCell.y === playerData.location.y
        }
        playerData={playerData}
      />
    ))
  );

  return (
    <div
      className={"chess-game-container"}
      style={{ gridTemplateColumns: gridColumnsStyle }}
    >
      {cells}
    </div>
  );
}
