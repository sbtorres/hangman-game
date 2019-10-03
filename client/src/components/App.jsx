import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import SecretWord from './SecretWord';
import LetterInputForm from './LetterInputForm';
import GuessFeedbackSnackbar from './GuessFeedbackSnackbar';
import EndOfGameModal from './EndOfGameModal';
import PreviousGuessesView from './PreviousGuessesView';
import LinkedInImage from './LinkedInImage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleLetters: [],
      incorrectGuesses: [],
      secretWord: '',
      lastGuess: 'null',
      snackbarIsOpen: false,
      isWinner: false,
      showEndOfGameModal: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/words/getInitialString')
      .then(({ data }) => {
        this.setState({
          visibleLetters: data.charactersArray
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUserGuess = guessedLetter => {
    axios
      .get(`http://localhost:3000/words/checkGuess/${guessedLetter}`)
      .then(({ data }) => {
        if (data.correctGuess) {
          if (data.hasWon) {
            this.setState({
              visibleLetters: data.charactersArray,
              secretWord: data.secretWord,
              showEndOfGameModal: true,
              isWinner: data.hasWon
            });
          } else {
            this.setState({
              visibleLetters: data.charactersArray,
              lastGuess: 'correct',
              snackbarIsOpen: true
            });
          }
        } else {
          const { incorrectGuesses } = this.state;
          if (incorrectGuesses.length === 5) {
            this.setState({
              incorrectGuesses: data.incorrectGuesses,
              secretWord: data.secretWord,
              showEndOfGameModal: true
            });
          } else {
            this.setState({
              incorrectGuesses: data.incorrectGuesses,
              lastGuess: 'incorrect',
              snackbarIsOpen: true
            });
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSnackbarClose = () => {
    this.setState({
      snackbarIsOpen: false
    });
  };

  handleGameRestart = () => {
    this.setState({
      lastGuess: 'null',
      secretWord: '',
      isWinner: false,
      snackbarIsOpen: false,
      incorrectGuesses: [],
      showEndOfGameModal: false
    });
    this.componentDidMount();
  };

  render() {
    const {
      visibleLetters,
      incorrectGuesses,
      secretWord,
      temp,
      lastGuess,
      snackbarIsOpen,
      isWinner,
      showEndOfGameModal
    } = this.state;

    return (
      <div>
        <div>{temp}</div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <LinkedInImage incorrectGuesses={incorrectGuesses} />
          <SecretWord visibleLetters={visibleLetters} />
        </Grid>
        <div>
          <LetterInputForm
            handleUserGuess={this.handleUserGuess}
            incorrectGuesses={incorrectGuesses}
            visibleLetters={visibleLetters}
          />
        </div>
        <div style={{ padding: 10 }}>
          <PreviousGuessesView incorrectGuesses={incorrectGuesses} />
        </div>
        <EndOfGameModal
          showEndOfGameModal={showEndOfGameModal}
          handleGameRestart={this.handleGameRestart}
          isWinner={isWinner}
          secretWord={secretWord}
        />
        <GuessFeedbackSnackbar
          lastGuess={lastGuess}
          isOpen={snackbarIsOpen}
          handleSnackbarClose={this.handleSnackbarClose}
        />
      </div>
    );
  }
}

export default App;
