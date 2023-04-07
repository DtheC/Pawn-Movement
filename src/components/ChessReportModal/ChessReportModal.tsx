import { DIR_NORTH, DIR_WEST, DIR_SOUTH, DIR_EAST } from "../../constants";
import { usePlayerContext } from "../../context/PlayerContext";
import { Coordinate2D } from "../interfaces";
import "./ChessReportModal.css";

export default function ChessReportModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { playerLocation, playerFacing } = usePlayerContext();

  function getReportText() {
    return `${playerLocation.x + 1}:${playerLocation.y + 1}:${facingToPlainText(playerFacing)}`;
  }

  function facingToPlainText(dir: Coordinate2D) {
    switch (dir) {
      case DIR_NORTH:
        return "top";
      case DIR_WEST:
        return "left";
      case DIR_SOUTH:
        return "bottom";
      case DIR_EAST:
        return "right";
    }
  }
  return (
    <div className="chess-report-modal-container" onClick={closeModal}>
      <div className="chess-report-modal" onClick={(e) => e.stopPropagation()}>
        <div className="chess-report-modal-close" onClick={closeModal}>
          <span>X</span>
        </div>
        <div className="chess-report-modal-body">
          <h1 className="chess-report-modal-header">Current Location</h1>
          <div className="chess-report-modal-text">{getReportText()}</div>
        </div>
      </div>
    </div>
  );
}
