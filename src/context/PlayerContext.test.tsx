import { useContext } from "react";
import { PlayerContextWrapper, usePlayerContext } from "./PlayerContext";
import { render } from "@testing-library/react";

// import { render } from '../../test-utils';
// import ChessControls from './ChessControls';

// const handleReportLocation = () => {}

const TestComponent = () => {
  const {
    playerLocation,
    setPlayerLocation,
    playerFacing,
    setPlayerFacing,
    playerCanStepForward,
    setPlayerCanStepForward,
    playerTurnLeft,
    playerTurnRight,
    playerMove,
  } = usePlayerContext();

  return (
    <>
      <p>
        {playerLocation.x} | {playerLocation.y}
      </p>
      <p>
        {playerFacing.x} | {playerFacing.y}
      </p>
    </>
  );
};

test("renders without error", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
});
