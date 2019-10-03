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
      temp: '',
      lastGuess: 'null',
      snackbarIsOpen: false,
      isWinner: false,
      showEndOfGameModal: false
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/getInitialString')
      .then(({ data }) => {
        this.setState({
          visibleLetters: data.charactersArray,
          temp: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUserGuess = guessedLetter => {
    axios
      .get(`http://localhost:3000/checkGuess/${guessedLetter}`)
      .then(({ data }) => {
        if (data.correctGuess) {
          if (data.hasWon) {
            this.setState({
              visibleLetters: data.charactersArray,
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
          />
        </div>
        <div style={{ padding: 10 }}>
          <PreviousGuessesView incorrectGuesses={incorrectGuesses} />
        </div>
        <EndOfGameModal
          showEndOfGameModal={showEndOfGameModal}
          handleGameRestart={this.handleGameRestart}
          isWinner={isWinner}
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
