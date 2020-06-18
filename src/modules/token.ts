import speakeasy from 'speakeasy';

const GetAWS = () => {
  let token = speakeasy.totp({
    secret: 'RSOPCBMWT7GK33QGJXBAAD4HDEZWNHUBQ7UXNYEVCH3HU7ZD6OMIUVSG5FUUQEIO',
    encoding: 'base32',
  });
  return token;
};

const token = { GetAWS };
export default token;
