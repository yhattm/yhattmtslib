import token from './token';

describe('token', () => {
  it('GetAWS', async () => {
    const res = token.GetAWS()
    console.log(res);
  });
});
