require('jest-extended');
const axios = require('axios');
const {
  getInitialString,
  checkGuess
} = require('../server/controllers/words.controller');

jest.mock('axios');

const mockCheckGuessRequest = guessedLetter => {
  return {
    params: {
      guessedLetter
    }
  };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe('Test getInitialString controller', () => {
  it('should return a character array with the correct number of underscores', async () => {
    const req = {};
    const res = mockResponse();
    axios.get.mockResolvedValue({ data: 'test' });
    await getInitialString(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith({ charactersArray: ['_', '_', '_', '_'] });
  });
});

describe('Test checkGuess controller', () => {
  it('should return correct values for a correct guess', async () => {
    const req = mockCheckGuessRequest('t');
    const res = mockResponse();
    await checkGuess(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith({
      charactersArray: ['t', '_', '_', 't'],
      correctGuess: true,
      hasWon: false,
      incorrectGuesses: []
    });
  });

  it('should return correct values for an incorrect guess', async () => {
    const req = mockCheckGuessRequest('i');
    const res = mockResponse();
    await checkGuess(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith({
      charactersArray: ['t', '_', '_', 't'],
      correctGuess: false,
      hasWon: false,
      incorrectGuesses: ['I']
    });
  });

  it('should return that user has won if all letters are guessed', async () => {
    const req1 = mockCheckGuessRequest('e');
    const res1 = mockResponse();
    await checkGuess(req1, res1);
    const req2 = mockCheckGuessRequest('s');
    const res2 = mockResponse();
    await checkGuess(req2, res2);
    expect(res2.status).toBeCalledWith(200);
    expect(res2.send).toBeCalledWith({
      charactersArray: ['t', 'e', 's', 't'],
      correctGuess: true,
      hasWon: true,
      incorrectGuesses: ['I']
    });
  });
});
