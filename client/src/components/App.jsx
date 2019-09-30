import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import SecretWord from './SecretWord';
import LetterInputForm from './LetterInputForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { visibleLetters: [], temp: '' };
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
        this.setState({
          visibleLetters: data.charactersArray
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { visibleLetters, temp } = this.state;

    return (
      <div>
        <div>{temp}</div>
        <Grid container direction="column" justify="center" alignItems="center">
          <SecretWord visibleLetters={visibleLetters} />
        </Grid>
        <div>
          <LetterInputForm handleUserGuess={this.handleUserGuess} />
        </div>
      </div>
    );
  }
}

export default App;
