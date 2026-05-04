import fetch from 'isomorphic-fetch';
import { gotScraping } from 'got-scraping';
import { UserInformation } from '../types';

export const fetchUserInformation = async (
  handle: string | string[]
): Promise<UserInformation> => {
  const data = await gotScraping.get(
    `https://solved.ac/api/v3/user/show?handle=${handle}`
  );
  const result = JSON.parse(data.body) as UserInformation;
  return result;
};

export const fetchImage = async (imageUrl: string) => {
  const data = await fetch(imageUrl);
  let result = '';
  const arrayBuffer = await data.arrayBuffer();
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < arrayBuffer.byteLength; i++) {
      result += String.fromCharCode(byteArray[i]);
    }
  }
  return Buffer.from(result, 'binary').toString('base64');
};
