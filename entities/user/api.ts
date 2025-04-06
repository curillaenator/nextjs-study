import type { NextAppUser } from './interfaces';

const USERS_ENDPOINT = 'http://localhost:4000/users';

const authUser = async (creds: Record<'email' | 'password', string>) => {
  const data = await fetch(USERS_ENDPOINT, {
    next: { revalidate: 15 },
  });

  const userList = (await data.json()) as NextAppUser[];

  return userList.find(({ email, password }) => creds.email === email && creds.password === password) || null;
};

export { authUser };
