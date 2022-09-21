import * as mqtt from 'mqtt';

const connect = (url: string) => {
  return mqtt.connect(url);
};

export const mqttcli = { connect };
