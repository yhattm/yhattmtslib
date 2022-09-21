import * as yhattmlibts from './index';

describe('index', () => {
  it('index', async () => {
    expect(yhattmlibts).toMatchSnapshot();
  });
});
