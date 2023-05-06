import { useContext, useEffect } from "react";
import { PlayerContextWrapper, usePlayerContext } from "./PlayerContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { DIR_NORTH } from "../constants";

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
      <p data-testid="location">
        {playerLocation.x} | {playerLocation.y}
      </p>
      <p data-testid="facing">
        {playerFacing.x} | {playerFacing.y}
      </p>
      <input
        data-testid="can-move"
        type="checkbox"
        checked={playerCanStepForward}
        readOnly={true}
      />
      <button data-testid="move-player" onClick={playerMove}>
        Move Player
      </button>
      <button data-testid="turn-right" onClick={playerTurnRight}>
        Turn Right
      </button>
      <button data-testid="turn-left" onClick={playerTurnLeft}>
        Turn Left
      </button>
    </>
  );
};

function getElements() {
  const location = screen.getByTestId("location");
  const facing = screen.getByTestId("facing");
  const canMove = screen.getByTestId("can-move") as HTMLInputElement;
  const movePlayerButton = screen.getByTestId("move-player");
  const turnLeftButton = screen.getByTestId("turn-left");
  const turnRightButton = screen.getByTestId("turn-right");
  return {
    location,
    facing,
    canMove,
    movePlayerButton,
    turnLeftButton,
    turnRightButton,
  };
}

test("renders without error", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
});

test("default location is 0 | 0", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { location } = getElements();
  expect(location).toHaveTextContent("0 | 0");
});

test("default facing is DIR_NORTH", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { facing } = getElements();
  expect(facing).toHaveTextContent(`${DIR_NORTH.x} | ${DIR_NORTH.y}`);
});

test("playerLocation does not change if !playerCanStepForward", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton } = getElements();
  expect(canMove.checked).toBe(false);
  expect(location).toHaveTextContent("0 | 0");
  fireEvent.click(movePlayerButton);
  expect(location).toHaveTextContent("0 | 0");
});

test("playerLocationchanges on move if playerCanStepForward", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton, turnRightButton } =
    getElements();
  expect(location).toHaveTextContent("0 | 0");
  fireEvent.click(turnRightButton);
  expect(canMove.checked).toBe(true);
  fireEvent.click(movePlayerButton);
  expect(location).toHaveTextContent("1 | 0");
});

test("player can not step out of left edge", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton, turnLeftButton } =
    getElements();
  expect(location).toHaveTextContent("0 | 0");
  fireEvent.click(turnLeftButton);
  expect(canMove.checked).toBe(false);
  fireEvent.click(movePlayerButton);
  expect(location).toHaveTextContent("0 | 0");
});

test("player can not step out of top edge", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton } =
    getElements();
  expect(location).toHaveTextContent("0 | 0");
  expect(canMove.checked).toBe(false);
  fireEvent.click(movePlayerButton);
  expect(location).toHaveTextContent("0 | 0");
});

test("player can not step out of bottom edge", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton, turnLeftButton } =
    getElements();
  expect(location).toHaveTextContent("0 | 0");
  fireEvent.click(turnLeftButton);
  fireEvent.click(turnLeftButton);
  expect(canMove.checked).toBe(true);
  while(canMove.checked) fireEvent.click(movePlayerButton);
  expect(canMove.checked).toBe(false);
});

test("player can not step out of right edge", () => {
  render(
    <PlayerContextWrapper>
      <TestComponent />
    </PlayerContextWrapper>
  );
  const { canMove, location, movePlayerButton, turnRightButton } =
    getElements();
  expect(location).toHaveTextContent("0 | 0");
  fireEvent.click(turnRightButton);
  expect(canMove.checked).toBe(true);
  while(canMove.checked) fireEvent.click(movePlayerButton);
  expect(canMove.checked).toBe(false);
});

