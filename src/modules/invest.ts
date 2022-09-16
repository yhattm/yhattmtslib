import fetch from '../fetch'
import * as cheerio from 'cheerio';
const configJson = require('../config/config.json')

const GetStock = async () => {
  const res = await fetch(
    'https://tw.screener.finance.yahoo.net/future/aa03?fumr=futurepart&opmr=optionpart&random=0.6297693371261759'
  );
  const $ = cheerio.load(res);
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
  const $ = cheerio.load(res);
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

const GetExchanges = async () => {
  const config = configJson;
  const res = await fetch(
    'https://ibank.firstbank.com.tw/NetBank/7/0201.html?sh=none'
  );
  const $ = cheerio.load(res);

  const selectorPrice = $('td[class="ListTitleFont"]');

  const exchanges = [
    {
      currency: 'USD',
      price: config.exchanges.filter((ex: any) => ex.currency === 'USD')[0]
        .price,
      buy: parseFloat($(selectorPrice[3]).text()),
      sell: parseFloat($(selectorPrice[4]).text()),
    },
    {
      currency: 'GBP',
      price: config.exchanges.filter((ex: any) => ex.currency === 'GBP')[0]
        .price,
      buy: parseFloat($(selectorPrice[13]).text()),
      sell: parseFloat($(selectorPrice[14]).text()),
    },
    {
      currency: 'AUD',
      price: config.exchanges.filter((ex: any) => ex.currency === 'AUD')[0]
        .price,
      buy: parseFloat($(selectorPrice[33]).text()),
      sell: parseFloat($(selectorPrice[34]).text()),
    },
    {
      currency: 'CAD',
      price: config.exchanges.filter((ex: any) => ex.currency === 'CAD')[0]
        .price,
      buy: parseFloat($(selectorPrice[53]).text()),
      sell: parseFloat($(selectorPrice[54]).text()),
    },
    {
      currency: 'JPY',
      price: config.exchanges.filter((ex: any) => ex.currency === 'JPY')[0]
        .price,
      buy: parseFloat($(selectorPrice[63]).text()),
      sell: parseFloat($(selectorPrice[64]).text()),
    },
    {
      currency: 'ZAR',
      price: config.exchanges.filter((ex: any) => ex.currency === 'ZAR')[0]
        .price,
      buy: parseFloat($(selectorPrice[73]).text()),
      sell: parseFloat($(selectorPrice[74]).text()),
    },
    {
      currency: 'NZD',
      price: config.exchanges.filter((ex: any) => ex.currency === 'NZD')[0]
        .price,
      buy: parseFloat($(selectorPrice[88]).text()),
      sell: parseFloat($(selectorPrice[89]).text()),
    },
    {
      currency: 'EUR',
      price: config.exchanges.filter((ex: any) => ex.currency === 'EUR')[0]
        .price,
      buy: parseFloat($(selectorPrice[93]).text()),
      sell: parseFloat($(selectorPrice[94]).text()),
    },
    {
      currency: 'CNY',
      price: config.exchanges.filter((ex: any) => ex.currency === 'CNY')[0]
        .price,
      buy: parseFloat($(selectorPrice[103]).text()),
      sell: parseFloat($(selectorPrice[104]).text()),
    },
    {
      currency: 'TRY',
      price: config.exchanges.filter((ex: any) => ex.currency === 'TRY')[0]
        .price,
      buy: parseFloat($(selectorPrice[113]).text()),
      sell: parseFloat($(selectorPrice[114]).text()),
    },
  ];

  return exchanges;
};
const GetGold = async () => {
  const config = configJson;
  const res = await fetch(
    'https://ibank.firstbank.com.tw/NetBank/7/1501.html?sh=none'
  );
  const $ = cheerio.load(res);
  var selectorPrice = $('td[class="ListTitleFont"]');
  //console.log($(selectorPrice[2]).text())
  //console.log($(selectorPrice[3]).text())

  const gold = {
    price: config.gold.price,
    buy: parseFloat(
      $(selectorPrice[2])
        .text()
        .replace(',', '')
    ),
    sell: parseFloat(
      $(selectorPrice[3])
        .text()
        .replace(',', '')
    ),
  };
  return gold;
};

const invest = { GetStock, GetOption, GetExchanges, GetGold };
export default invest;
