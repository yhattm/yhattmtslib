import fetch from '../fetch';
import * as cheerio from 'cheerio';

const GetPrice = async () => {
  const res = await fetch('https://m.gas.goodlife.tw');
  const $ = cheerio.load(res);
  var date = $('p', '#gas-price');
  var gasPrice = $('h2', '#gas-price');
  //console.log(gasPrice.text())
  //console.log(gasPrice.html())
  //console.log(gasPrice.attr('class'))
  //console.log(gasPrice.children('em').html())
  return date.text() + gasPrice.text() + '\n';
};

const gas = { GetPrice };
export default gas;
