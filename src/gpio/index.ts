import { Gpio } from 'onoff';

const setHigh = (pin: number) => {
  const led = new Gpio(pin, 'out');
  led.writeSync(Gpio.HIGH);
};

const setLow = (pin: number) => {
  const led = new Gpio(pin, 'out');
  led.writeSync(Gpio.LOW);
};

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const setHighToLow = async (pin: number, time: number) => {
  const led = new Gpio(pin, 'out');
  led.writeSync(Gpio.HIGH);
  console.log('Set high');
  await delay(time);
  led.writeSync(Gpio.LOW);
  console.log('Set low');
};

export const gpio = { setHigh, setLow, setHighToLow };
