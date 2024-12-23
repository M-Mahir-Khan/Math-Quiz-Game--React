import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(30); // Timer starts at 30 seconds
  const [score, setScore] = useState(0); // Initial score
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [gameOver, setGameOver] = useState(false); // Track if the game is over

  // Generate a random math question
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() > 0.5 ? "+" : "-";
    const answer = operator === "+" ? num1 + num2 : num1 - num2;

    setQuestion({ num1, num2, operator, answer });
    setUserAnswer(""); // Reset input field
  };

  // Start the timer
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setGameOver(true); // End game when time runs out
    }
  }, [timeLeft, gameOver]);

  // Handle user answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === question.answer) {
      setScore((prev) => prev + 10); // Add points for correct answer
    }
    generateQuestion(); // Load a new question
  };

  // Restart the game
  const restartGame = () => {
    setTimeLeft(30); // Reset timer
    setScore(0); // Reset score
    setGameOver(false); // Reset game state
    generateQuestion(); // Start with a new question
  };

  // Generate the first question on load
  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="app">
      <h1>Math Quiz Blitz</h1>
      <div className="info">
        <div className="timer">
          <p>Time Left: {timeLeft}s</p>
        </div>
        <div className="scoreboard">
          <p>Score: {score}</p>
        </div>
      </div>

      {gameOver ? (
        <div className="game-over">
          <h2>Time's Up!</h2>
          <p>Your Score: {score}</p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>
            {question.num1} {question.operator} {question.num2}
          </h2>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your Answer"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};


export default App;
