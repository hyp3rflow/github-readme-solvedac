import { NowRequest, NowResponse } from '@vercel/node';
import Card from '../src/card';
import { fetcher } from '../src/fetch/dataFetcher';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  try {
    const data = await fetcher(handle);
    if (data) {
      response.setHeader('Content-Type', 'image/svg+xml');
      response.setHeader('Cache-Control', `max-age=0, s-maxage=10`);
      const card = new Card({ width: 700, height: 150, data });
      return response.send(card.render());
    }
  } catch (error) {
    console.error(error);
    return response.status(404).send(error);
  }
  return response.status(500).send('');
};
