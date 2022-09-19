import { Gpio } from 'onoff'

const SetHigh = (pin: number) => {
    const led = new Gpio(pin, 'out');
    led.writeSync(Gpio.HIGH)
}

const SetLow = (pin: number) => {
    const led = new Gpio(pin, 'out');
    led.writeSync(Gpio.LOW)
}

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const SetHighToLow = async (pin: number, time: number) => {
    const led = new Gpio(pin, 'out');
    led.writeSync(Gpio.HIGH)
    await delay(time)
    led.writeSync(Gpio.LOW)
}

export const GPIO = { SetHigh, SetLow, SetHighToLow }