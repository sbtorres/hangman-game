import React, { Component } from 'react';
import axios from 'axios';

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
    return <div>{secretWordLength}</div>;
  }
}

export default App;
