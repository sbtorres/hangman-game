import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { secretWord: '' };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/getNewWord')
      .then(({ data }) => {
        this.setState({
          secretWord: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { secretWord } = this.state;
    return <div>{secretWord}</div>;
  }
}

export default App;
