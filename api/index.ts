import { NowRequest, NowResponse } from '@vercel/node';
import Card from '../src/card';
import { fetcher } from '../src/fetch/dataFetcher';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  const data = await fetcher(handle);

  if (data.success === true) {
    const user = data.result.user[0];
    const card = new Card({ width: 495, height: 100, user });
    response.status(200).send(card.render());
  } else {
    response.status(404);
  }
};
