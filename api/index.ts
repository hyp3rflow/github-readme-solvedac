import { NowRequest, NowResponse } from '@vercel/node';
import CardBuilder from '../src/card';
import { fetchUserInformation } from '../src/fetch';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  try {
    const userInformation = await fetchUserInformation(handle);
    if (userInformation) {
      response.setHeader('Content-Type', 'image/svg+xml');
      response.setHeader('Cache-Control', `max-age=0, s-maxage=10`);
      const card = new CardBuilder({
        width: 700,
        height: 150,
        data: userInformation,
      });
      return response.send(card.render());
    }
  } catch (error) {
    console.error(error);
    return response.status(404).send(error);
  }
  return response.status(500).send('');
};
