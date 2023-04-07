import "./ChessControls.css";
import { usePlayerContext } from "../../context/PlayerContext";
import ChessIcon from "../ChessIcon/ChessIcon";
import ChessControlButton from "./ChessControlButton";

interface Props {
  handleReportLocation: () => void;
}

export default function ChessControls({ handleReportLocation }: Props) {
  const {
    playerCanStepForward,
    playerTurnLeft,
    playerTurnRight,
    playerMove,
  } = usePlayerContext();
  return (
    <div className="controls-container">
      <div className="controls-container-inner">
        <ChessControlButton handleOnClick={playerTurnLeft}>
          <ChessIcon name="rotate-left" alt='Rotate Left' />
        </ChessControlButton>

        <ChessControlButton
          handleOnClick={playerMove}
          disabled={!playerCanStepForward}
        >
          <ChessIcon name="arrow" alt='Step Forward' />
        </ChessControlButton>

        <ChessControlButton handleOnClick={playerTurnRight}>
          <ChessIcon name="rotate-right" alt='Rotate Right' />
        </ChessControlButton>

        <ChessControlButton handleOnClick={handleReportLocation}>
          <ChessIcon name="message" alt='Show Location Popup' />
        </ChessControlButton>
      </div>
    </div>
  );
}
