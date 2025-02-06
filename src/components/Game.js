import React, { useState, useEffect } from "react";
import "./game.css";

const Game = () => {
  const colors = ["red", "blue", "black", "green", "orange", "purple"];
  const [score, setScore] = useState(0);
  const [targetColor, setTargetColor] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [colorOptions, setColorOptions] = useState([]);

  // Function to start a new game
  const startNewGame = () => {
    const randomTargetColor = colors[Math.floor(Math.random() * colors.length)];
    const randomOptions = [...colors]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    setTargetColor(randomTargetColor);
    setColorOptions(randomOptions);
    setGameStatus("");
  };

  // Initialize the game
  useEffect(() => {
    startNewGame();
  }, []);

  // Function to handle the player's guess
  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct!");
    } else {
      setGameStatus("Wrong, try again.");
      if (score > 0) {
        setScore(score - 1);
      } else {
        setScore(0);
      }
    }
  };

  return (
    <div
      style={{
        background: "#f0f0f0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="game-container"
        style={{
          padding: "20px",
          width: "300px",
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="game-title">
          <b>Guess the color!</b>
        </div>

        <div
          className="target-color-box"
          style={{
            backgroundColor: targetColor,
            height: "80px",
            border: "2px solid black",
            margin: "20px 0",
            borderRadius: "10px",
          }}
          data-testid="colorBox"
        ></div>

        <div className="button-container">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className="colorButton"
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
              data-testid="colorOption"
            ></button>
          ))}
        </div>

        <div>
          <span data-testid="gameStatus">{gameStatus}</span>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <span data-testid="score">Score: {score}</span>
        </div>

        <div>
          <button
            className="start-button"
            onClick={startNewGame}
            data-testid="newGameButton"
          >
            New game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
