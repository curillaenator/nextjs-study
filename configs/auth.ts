import type { NextAuthOptions, User as NextUser } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredsProvider from 'next-auth/providers/credentials';
import { omit } from 'lodash';

import { users as MOCK_USERS } from '@/mock/users';

const authCfg: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredsProvider({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },

      async authorize(creds) {
        if (!creds?.email || !creds.password) return null;

        // for simplicity
        const dbUser = MOCK_USERS.find(({ email, password }) => creds.email === email && creds.password === password);

        if (dbUser) return omit(dbUser, 'password') as NextUser;

        return null;
      },
    }),
  ],

  pages: {
    signIn: '/signin',
  },
};

export { authCfg };
