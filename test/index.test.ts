import { invest } from '../src';

describe('invest', () => {
  it('GetStock', async () => {
    const res = await invest.GetStock();
    console.log(res);
    expect(res.FIMTX1).toBeGreaterThan(0);
  });
  it('GetOption', async () => {
    const res = await invest.GetOption({ date: '202006', target: '11500' });
    console.log(res);
    if (res) {
      expect(res.call).toBeGreaterThan(0);
    }
  });
  it('GetExchanges', async () => {
    const res = await invest.GetExchanges();
    console.log(res);
    expect(res[0].price).toBeGreaterThan(0);
  });
});
