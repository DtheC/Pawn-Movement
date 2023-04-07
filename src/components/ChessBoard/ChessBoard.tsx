import { Coordinate2D, PlayerData } from "../interfaces";
import "./ChessBoard.css";
import ChessCell from "./ChessCell";

export default function ChessBoard({
  cellData,
}: {
  cellData: Coordinate2D[][];
}) {
  // Set count of columns based on length of row
  const gridColumnsStyle = "1fr ".repeat(cellData[0] ? cellData[0].length : 1);

  const cells = cellData.map((col, colIndex) =>
    col.map((rowCell, rowIndex) => (
      <ChessCell
        key={`${colIndex}-${rowIndex}`}
        cellPosition={rowCell}
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
