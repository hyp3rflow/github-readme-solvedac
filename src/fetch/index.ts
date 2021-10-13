import fetch from 'node-fetch';
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
