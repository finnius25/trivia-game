import React, { useEffect, useState } from "react";

function TrivaGame(props) {
  const [triviaData, setTriviaData] = useState({});

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
    .then(res => res.json())
    .then(data => setTriviaData(data))
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(triviaData, null, 2)}</pre>
    </div>
  );
}

export default TrivaGame;
