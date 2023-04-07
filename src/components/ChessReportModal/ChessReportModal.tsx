import { usePlayerContext } from "../../context/PlayerContext";
import {
  Coordinate2D,
  DIR_EAST,
  DIR_NORTH,
  DIR_SOUTH,
  DIR_WEST,
} from "../interfaces";
import "./ChessReportModal.css";

export default function ChessReportModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { location, facing } = usePlayerContext();

  function getReportText() {
    return `${location.x + 1}:${location.y + 1}:${facingToPlainText(facing)}`;
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
          {" "}
          X{" "}
        </div>
        <div className="chess-report-modal-body">
          <h1 className="chess-report-modal-header">Current Location</h1>
          <div className="chess-report-modal-text">{getReportText()}</div>
        </div>
      </div>
    </div>
  );
}
