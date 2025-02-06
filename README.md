# Guess The Color Game

## Overview

"Guess The Color" is a simple and engaging React game that challenges players to guess the correct color from a selection of colors. The player is shown a target color box, and they must choose the correct color from a list of options. The game provides immediate feedback on whether the guess was correct, and players earn points for correct guesses while losing points for incorrect ones. The game continues until the user decides to start a new round.

## Features

- **Randomized Color Options**: Each round presents the player with six color options, one of which is the target color.
- **Score System**: Players earn 1 point for a correct guess and lose 1 point for a wrong guess.
- **Game Feedback**: Real-time feedback informs the player if they guessed correctly or not.
- **Responsive Design**: The game is designed to be played on various screen sizes with a clean, minimal interface.

## Installation

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DEVMONTANNA/hndstage1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hndstage1
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

   or, if you prefer Yarn:

   ```bash
   yarn install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

   or, with Yarn:

   ```bash
   yarn start
   ```

   Visit `http://localhost:3000` in your browser to play the game!

## How to Play

1. The game will display a box with a target color.
2. Below the box, you will see six color buttons. Click on the color you think matches the target.
3. If you are correct, you earn 1 point, and the game shows a "Correct!" message. If you're wrong, you lose 1 point, and the game shows a "Wrong, try again." message.
4. You can start a new game anytime by clicking the "New game" button.

## Component Breakdown

### `Game` Component

The main game logic resides in this functional component:

- **State Management**:
  - `score`: Tracks the current score of the player.
  - `targetColor`: Stores the randomly selected target color for the round.
  - `gameStatus`: Displays feedback on whether the player guessed correctly or not.
  - `colorOptions`: Holds the randomized list of color options available for selection.

- **useEffect Hook**: 
  - The `startNewGame` function is called when the component is first loaded to initialize the game.

- **startNewGame Function**: 
  - This function sets a new target color and randomizes the color options for the round.

- **handleGuess Function**: 
  - This function checks if the player's guess matches the target color and updates the score accordingly.

### CSS Styling

The game has a clean, modern design achieved using the following CSS classes:

- `.game-container`: Contains the entire game UI, styled with padding, a white background, and a subtle box-shadow.
- `.button-container`: Arranges the color buttons in a flexible layout.
- `.colorButton`: Defines the appearance of each color option button.
- `.start-button`: A custom button used to restart the game.

### Responsive Design

The game is designed to be played on both desktop and mobile devices with a fully responsive layout. The buttons and content are centered and scale appropriately based on the screen size.

## Future Enhancements

- **Timer**: Implement a countdown timer for each round to increase difficulty.
- **High Score**: Add a high score feature to track the best performance.
- **Difficulty Levels**: Introduce different difficulty levels with more colors and fewer clues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

---

Enjoy playing the game! 🎮
