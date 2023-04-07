import { PropsWithChildren } from "react";
import './ChessControlButton.css';

interface Props extends PropsWithChildren {
  handleOnClick: () => void;
  disabled?: boolean;
}

export default function ChessControlButton({
  children,
  handleOnClick,
  disabled,
}: Props) {
  return (
    <button className='chess-control-button' onClick={handleOnClick} disabled={disabled}>
      {children}
    </button>
  );
}
