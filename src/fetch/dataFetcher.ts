import fetch from 'node-fetch';

export const fetcher = async (handle: string | string[]) => {
  const data = await fetch(
    `https://api.solved.ac/v3/users/show?handle=${handle}`
  );
  const dataJSON = await data.json();

  return dataJSON;
};
