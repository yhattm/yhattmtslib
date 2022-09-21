import token from './token';

describe('token', () => {
  it('GetAWS', async () => {
    const res = token.getAWS();
    console.log(res);
  });
});
