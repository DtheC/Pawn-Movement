import ChessPlayer from "../ChessPlayer/ChessPlayer";
import { ChessCell } from "../interfaces";
import "./ChessBoard.css";

const ChessBoard = ({
  cellData,
}: {
  className: string;
  cellData: ChessCell[][];
}) => {
  // TODO: remove hardcoding of 8
  const gridColumns = "1fr ".repeat(8);

  const cells = cellData.map((col, colIndex) =>
    col.map((row, rowIndex) => <div className={`chess-game-cell`}></div>)
  );

  return (
    <div
      className={"chess-game-container"}
      style={{ gridTemplateColumns: gridColumns }}
    >
      {cells}

      <ChessPlayer />
    </div>
  );
};

export default ChessBoard;
