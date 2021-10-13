import fetch from 'isomorphic-fetch';
import { UserInformation } from '../types';

export const fetchUserInformation = async (
  handle: string | string[]
): Promise<UserInformation> => {
  const data = await fetch(
    `https://solved.ac/api/v3/user/show?handle=${handle}`
  );
  const result = (await data.json()) as UserInformation;
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
  return btoa(result);
};
