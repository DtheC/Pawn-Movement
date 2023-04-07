
interface Props {
  handleRotateLeft: () => void;
  handleRotateRight: () => void;
  handleStepForward: () => void;
  handleReportLocation: () => void;
  canStepForward: boolean;
}

export default function ChessControls({
  handleRotateLeft,
  handleRotateRight,
  handleStepForward,
  handleReportLocation,
  canStepForward,
}: Props) {
  return (
    <div className="controls-container">
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
      <button onClick={handleStepForward} disabled={!canStepForward}>Step Forward</button>
      <button onClick={handleReportLocation}>Report Location</button>
    </div>
  );
}
