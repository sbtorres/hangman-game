# Hangman

This is an interactive hangman game built using React. See below for more information on how to install the game, the game rules, and tips and tricks to beat the computer!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Fork the repository.
2. Clone the repository down to your local machine using the `git clone` command from inside the terminal.
3. Install project dependencies by running `npm install` in the terminal from the root folder of the repository.
4. Build the project using the shell command `npm run build:prod`.
5. Start the server using the shell command `npm run start`.
6. Navigate to [http://localhost:3000](http://localhost:3000) in your favorite browser to play the game!

## Game Rules

This version of hangman is a single player game. Your goal is the guess the word that is chosen by the computer!

- Once the computer chooses a word, the number of letters will be displayed by underscores.
- Guess letters one at a time. A correct guess will display the letter in its proper location. An incorrect guess will bring you one step closer to losing!
- If you guess six letters incorrectly before completing the word, you lose!
- If you guess the whole word before making six incorrect guesses, you win! Congrats on saving a life ;).

## Other Development Information

### Running Tests

To run the tests for this project, navigate to the projects root directory and run `npm run test`.

## Built With

- [React](https://reactjs.org/) - Frontend Library for building user interface
- [Express](https://expressjs.com) - Node.js server framework

## Author

- **Scott Torres**
  [Github Profile](https://github.com/sbtorres) [LinkedIn Profile](https://www.linkedin.com/in/scott-torres27/)
