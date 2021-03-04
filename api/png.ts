import { NowRequest, NowResponse } from '@vercel/node';
import { convert } from 'convert-svg-to-png';
import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';
import Card from '../src/card';
import { fetcher } from '../src/fetch/dataFetcher';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  const data = await fetcher(handle);

  if (data.success === true) {
    response.setHeader('Content-Type', 'image/png');
    response.setHeader('Cache-Control', `max-age=0, s-maxage=10`);

    await chrome.font(__dirname + '/NotoSansKR-Bold.otf');

    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });

    const page = await browser.newPage();
    page.setViewport({ width: 700, height: 150 });
    await page.goto(
      `https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=${handle}`
    );
    const png = await page.screenshot({ omitBackground: true });
    await browser.close();

    response.send(png);
  } else {
    response.status(404).send('');
  }
};
