import { gpio } from './index';

describe('index', () => {
  it('index', async () => {
    try {
      await gpio.setHighToLow(14, 1000);
    } catch (error) {
      console.log(error);
    }
  });
});
