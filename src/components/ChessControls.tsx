
interface Props {
  handleRotateLeft: () => void;
  handleRotateRight: () => void;
  handleStepForward: () => void;
  handleReportLocation: () => void;
}

export default function ChessControls({
  handleRotateLeft,
  handleRotateRight,
  handleStepForward,
  handleReportLocation,
}: Props) {
  return (
    <div className="controls-container">
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
      <button onClick={handleStepForward}>Step Forward</button>
      <button onClick={handleReportLocation}>Report Location</button>
    </div>
  );
}
