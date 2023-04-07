import { usePlayerContext } from "../../context/PlayerContext";

interface Props {
  handleReportLocation: () => void;
}

export default function ChessControls({ handleReportLocation }: Props) {
  const {
    canStepForward,
    handleRotateLeft,
    handleRotateRight,
    handleStepForward,
  } = usePlayerContext();
  return (
    <div className="controls-container">
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
      <button onClick={handleStepForward} disabled={!canStepForward}>
        Step Forward
      </button>
      <button onClick={handleReportLocation}>Report Location</button>
    </div>
  );
}
