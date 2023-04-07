import "./ChessControls.css";
import { usePlayerContext } from "../../context/PlayerContext";
import ChessIcon from "../ChessIcon/ChessIcon";
import ChessControlButton from "./ChessControlButton";

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
      <div className="controls-container-inner">
        <ChessControlButton handleOnClick={handleRotateLeft}>
          <ChessIcon name="rotate-left" alt='Rotate Left' />
        </ChessControlButton>

        <ChessControlButton
          handleOnClick={handleStepForward}
          disabled={!canStepForward}
        >
          <ChessIcon name="arrow" alt='Step Forward' />
        </ChessControlButton>

        <ChessControlButton handleOnClick={handleRotateRight}>
          <ChessIcon name="rotate-right" alt='Rotate Right' />
        </ChessControlButton>

        <ChessControlButton handleOnClick={handleReportLocation}>
          <ChessIcon name="message" alt='Show Location Popup' />
        </ChessControlButton>
      </div>
    </div>
  );
}
