import GoogleProvider from 'next-auth/providers/google';
import CredsProvider from 'next-auth/providers/credentials';
import { omit } from 'lodash';

import type { NextAuthOptions } from 'next-auth';

import { authUser, type NextAppUser } from '@/entities/user';

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

        const dbUser = await authUser(creds);

        if (dbUser) return omit(dbUser, 'password') as NextAppUser;

        return null;
      },
    }),
  ],

  pages: {
    signIn: '/signin',
  },
};

export { authCfg };
