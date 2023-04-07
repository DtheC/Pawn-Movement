import "./App.css";
import ChessGame from "./components/ChessGame/ChessGame";
import { PlayerContextWrapper } from "./context/PlayerContext";

function App() {
  return (
    <div className="App">
      <PlayerContextWrapper>
        <ChessGame />
      </PlayerContextWrapper>
    </div>
  );
}

export default App;
