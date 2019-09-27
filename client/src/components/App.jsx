import React, { Component } from 'react';
import axios from 'axios';
import SecretWord from './SecretWord';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { secretWordLength: 0 };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/getSecretWordLength')
      .then(({ data }) => {
        this.setState({
          secretWordLength: parseInt(data, 10)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { secretWordLength } = this.state;
    return <SecretWord secretWordLength={secretWordLength} />;
  }
}

export default App;
