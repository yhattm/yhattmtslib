import { GPIO } from './index';

describe('index', () => {
  it('index', async () => {
    try {
      await GPIO.SetHighToLow(14, 1000);
    } catch (error) {
      console.log(error);
    }
  });
});
