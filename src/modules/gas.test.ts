import gas from './gas';

describe('gas', () => {
  it('GetPrice', async () => {
    const res = await gas.GetPrice();
    console.log(res);
  });
});
