import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import TriviaGame from "./components/TriviaGame";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [triviaData, setTriviaData] = useState([]);

  function startQuiz() {
    setStartGame((prevState) => !prevState);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then((res) => res.json())
      .then((data) => setTriviaData(data.results));
  }, []);
  

  return (
    <div className="App">
      {startGame ? (
        <TriviaGame triviaData={triviaData} startGame={startGame}/>
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
