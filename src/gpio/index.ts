import { Gpio } from 'onoff'

const SetHigh = (pin: number) => {
    const led = new Gpio(pin, 'out');
    led.writeSync(Gpio.HIGH)
}

const SetLow = (pin: number) => {
    const led = new Gpio(pin, 'out');
    led.writeSync(Gpio.LOW)
}

export const GPIO = { SetHigh, SetLow }