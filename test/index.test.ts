import { invest } from '../src';

describe('index', () => {
  it('invest', async () => {
    const res = await invest.getStock();
    console.log(res);
    expect(res.FIMTX1).toBeGreaterThan(0);
  });
});
