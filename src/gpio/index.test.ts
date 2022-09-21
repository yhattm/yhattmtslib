import { GPIO } from './index';

describe('index', () => {
  it('index', async () => {
    try {
      await GPIO.setHighToLow(14, 1000);
    } catch (error) {
      console.log(error);
    }
  });
});
