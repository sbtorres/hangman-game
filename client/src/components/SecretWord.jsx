import React from 'react';
import PropTypes from 'prop-types';

const SecretWord = ({ secretWordLength }) => <div>{secretWordLength}</div>;

SecretWord.propTypes = { secretWordLength: PropTypes.number.isRequired };

export default SecretWord;
