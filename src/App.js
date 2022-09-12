import "./App.css";
import React from "react";
import { useState } from "react";
import TrivaGame from "./components/TrivaGame";

function App() {
  const [startGame, setStartGame] = useState(false);

  function startQuiz() {
    setStartGame((prevState) => !prevState);
  }

  return (
    <div className="App">
      {startGame ? (
        <TrivaGame />
      ) : (
        <div className="start-screen-container">
          <h1 className="trivia-title">Trivia Game</h1>
          <h3 className="start-screen-description-text">
            Increase your IQ now
          </h3>
          <button className="start-quiz-btn" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
