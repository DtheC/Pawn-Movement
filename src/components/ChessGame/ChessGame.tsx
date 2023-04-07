import { generateBasicData } from "../../helpers";
import "./ChessGame.css";
import ChessBoard from "../ChessBoard/ChessBoard";
import ChessControls from "../ChessControls/ChessControls";
import { useState } from "react";
import ChessReportModal from "../ChessReportModal/ChessReportModal";

export default function ChessGame() {
  const cellData = generateBasicData();

  const [showReportModal, setShowReportModal] = useState(false);

  function handleReportLocation() {
    setShowReportModal(!showReportModal);
  }

  function closeModal() {
    setShowReportModal(false);
  }

  return (
    <div>
      <div className="chess-board">
        <ChessBoard cellData={cellData} />
        {showReportModal && (
          <ChessReportModal closeModal={closeModal} />
        )}
      </div>

      <div className="chess-controls">
        <ChessControls
          handleReportLocation={handleReportLocation}
        />
      </div>
    </div>
  );
}
