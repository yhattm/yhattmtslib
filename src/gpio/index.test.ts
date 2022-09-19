import { GPIO } from './index';

describe('index', () => {
    it('index', async () => {
        try {
            GPIO.SetHigh(14);
        } catch (error) {
            console.log(error)
        }
    });
});