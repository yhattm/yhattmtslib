import { mqttcli } from './index';

describe('index', () => {
  it('index', async () => {
    const cli = mqttcli.connect('https://broker.hivemq.com');
    cli.subscribe('test', err => {
      if (err) {
        console.log(err);
        return;
      }
      cli.publish('test', 'Hello mqtt');
    });
    const res = new Promise(resolve => {
      cli.on('message', function(topic, msg) {
        console.log(topic, msg.toString());
        resolve(msg);
      });
    });
    await res;
    cli.end();
  });
});
