import { invest, bus, gas, token } from '../src';

describe('bus', () => {
  it('ToCompany', async () => {
    const res = await bus.ToCompany();
    console.log(res);
  });
});

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
  it('GetGold', async () => {
    const res = await invest.GetGold();
    console.log(res);
    expect(res.price).toBeGreaterThan(0);
  });
});

describe('gas', () => {
  it('GetPrice', async () => {
    const res = await gas.GetPrice();
    console.log(res);
  });
});

describe('token', () => {
  it('GetAWS', async () => {
    const res = await token.GetAWS();
    console.log(res);
  });
});
