import arrow from './assets/arrow-up-solid.svg';
import pawn from './assets/chess-pawn-solid.svg';
import rotateLeft from './assets/rotate-left-solid.svg';
import rotateRight from './assets/rotate-right-solid.svg';
import message from './assets/message-solid.svg';
import './ChessIcon.css';

interface Props {
  name: 'arrow' | 'pawn' | 'rotate-left' | 'rotate-right' | 'message',
  alt?: string
}

export default function ChessIcon({ name, alt }: Props) {
  const icon = () => {
    switch (name) {
      case 'arrow':
      return arrow;
      case 'pawn':
      return pawn;
      case 'rotate-left':
      return rotateLeft;
      case 'rotate-right':
      return rotateRight;
      case 'message':
      return message;
    }
  }
  return (
    <div className="chess-icon-container">
      <img src={icon()} alt={alt || ''} />
    </div>
  );
}
