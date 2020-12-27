import { NowRequest, NowResponse } from '@vercel/node';
import { fetcher } from '../src/fetch/dataFetcher';

export default async (request: NowRequest, response: NowResponse) => {
  const handle = request.query.handle;
  const data = await fetcher(handle);

  if (data.success === true) {
    const user = data.result.user;
    response.status(200).send(`Hello ${user.user_id}!`);
  } else {
    response.status(404);
  }
};
