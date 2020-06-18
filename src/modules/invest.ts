import fetch from 'node-fetch';
import cheerio from 'cheerio';

const getStock = async () => {
  const res = await fetch(
    'https://tw.screener.finance.yahoo.net/future/aa03?fumr=futurepart&opmr=optionpart&random=0.6297693371261759'
  );
  const body = await res.text();
  const $ = cheerio.load(body);
  const selectorPrice = $('td');
  let price = { FIMTX1: 0, FIMTX2: 0, FIMTXDiff: 0 };
  price.FIMTX1 = parseFloat(
    $(selectorPrice[152])
      .text()
      .replace(',', '')
  );
  price.FIMTX2 = parseFloat(
    $(selectorPrice[166])
      .text()
      .replace(',', '')
  );
  price.FIMTXDiff = price.FIMTX2 - price.FIMTX1;
  return price;
};

const invest = { getStock };
export default invest;
