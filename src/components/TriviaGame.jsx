import React from "react";
import MarkdownView from "react-showdown";

function TriviaGame(props) {
  const triviaElement = props.triviaData.map((data) => {
    const correctAnswer = { isCorrect: "true", text: data.correct_answer };
    const incorrectAnswers = data.incorrect_answers.map((item) => {
      return { isCorrect: "false", text: item };
    });

    const options = incorrectAnswers.concat(correctAnswer);

    const shuffledOptions = options.map((option) => {
      return (
        <button className="shuffled-options">
          <MarkdownView
            markdown={option.text}
            options={{ tables: true, emoji: true }}
          />
        </button>
      );
    });

    const questionElement = (
      <h2 className="question-element">
        <MarkdownView
          markdown={data.question}
          options={{ tables: true, emoji: true }}
        />
      </h2>
    );

    return (
      <div>
        {questionElement}
        <div className="shuffled-options-container">{shuffledOptions}</div>
        <hr className="solid" />
      </div>
    );
  });

  return (
    <div className="trivia-game-container">
      {triviaElement}
      <div>
        <button className="answer-check-btn">Check Answers</button>
      </div>
    </div>
  );
}

export default TriviaGame;
