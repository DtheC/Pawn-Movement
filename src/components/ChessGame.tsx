import { ChessCell } from "./interfaces";
import { generateBasicData } from "../helpers";
import "./ChessGame.css";
import ChessBoard from "./ChessBoard/ChessBoard";
import ChessControls from "./ChessControls";

const ChessGame = () => {
  const cellData: ChessCell[][] = generateBasicData();

  return (
    <div>
      <div className="chess-board">
        <ChessBoard className="chess-board" cellData={cellData} />
      </div>

      <div className="chess-controls">
        <ChessControls />
      </div>
    </div>
  );
};

export default ChessGame;
