import fetch from 'node-fetch';
import cheerio from 'cheerio';

const getConfig = async () => {
  const res = await fetch(
    'https://docs.google.com/document/export?format=txt&id=1SWsU4Dv93oqN67IuVAa9W8Qh75GeNWgA8C3MUKMOfLQ&token=AC4w5VgI0vCcwM4qgBYm5QHFEE3upEWAgQ%3A1540802477358&includes_info_params=true'
  );
  const text = await res.text();
  const cutText = text.substring(1, text.length);
  const jsonObject = JSON.parse(cutText);
  return jsonObject;
};

const GetStock = async () => {
  console.log(getConfig);
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

const GetOption = async (query: { date: string; target: string }) => {
  const { date, target } = query;
  const res = await fetch(
    'https://tw.screener.finance.yahoo.net/future/aa03?fumr=futurepart&opmr=optionpart&opym=' +
      date +
      '&random=0.6297693371261759'
  );
  const body = await res.text();
  const $ = cheerio.load(body);
  const callPrice = $("td:contains('" + target + "')")
    .prev()
    .prev()
    .prev()
    .prev()
    .prev();
  const putPrice = $("td:contains('" + target + "')")
    .next()
    .next()
    .next();
  const result = {
    call: parseFloat($(callPrice).text()),
    put: parseFloat($(putPrice).text()),
  };
  return result;
};

const invest = { GetStock, GetOption };
export default invest;
