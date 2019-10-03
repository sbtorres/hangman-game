require('jest-extended');
const axios = require('axios');
const { getInitialString, checkGuess } = require('../words.controller');

jest.mock('axios');

const mockInitialStringResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe('Test getInitialString controller', () => {
  it('should return a character array with the correct number of underscores', async () => {
    const req = {};
    const res = mockInitialStringResponse();
    axios.get.mockResolvedValue({ data: 'test' });
    await getInitialString(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith({ charactersArray: ['_', '_', '_', '_'] });
  });
});
