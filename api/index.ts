import { NowRequest, NowResponse } from '@vercel/node';
import Card from '../src/card';
import { fetcher } from '../src/fetch/dataFetcher';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  const data = await fetcher(handle);

  console.log(data.success);

  if (data.success === true) {
    response.setHeader('Content-Type', 'image/svg+xml');
    response.setHeader('Cache-Control', `public, max-age=10`);

    const user = data.result.user[0];
    const card = new Card({ width: 700, height: 150, user });
    response.send(card.render());
  } else {
    response.status(404).send('');
  }
};
