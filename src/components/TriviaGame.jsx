import React from "react";

function TriviaGame(props) {
  const triviaElement = props.triviaData.map((data) => {
    const correctAnswer = { isCorrect: true, text: data.correct_answer };
    const incorrectAnswers = data.incorrect_answers.map((item) => {
      return { isCorrect: false, text: item };
    });

    const options = incorrectAnswers.concat(correctAnswer);

    const shuffledOptions = options.map((option) => {
      return <button>{option.text}</button>
    });

    const questionElement = <h2>{data.question}</h2>;

    return (
      <div>
        {questionElement}
        {shuffledOptions}
      </div>
    );
  });


  return <div>{triviaElement}</div>;
}

export default TriviaGame;
