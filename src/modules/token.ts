import speakeasy from 'speakeasy';

const getAWS = () => {
  let token = speakeasy.totp({
    secret: 'RSOPCBMWT7GK33QGJXBAAD4HDEZWNHUBQ7UXNYEVCH3HU7ZD6OMIUVSG5FUUQEIO',
    encoding: 'base32',
  });
  return token;
};

const token = { getAWS };
export default token;
