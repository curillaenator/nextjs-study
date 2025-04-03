import NextAuth from 'next-auth';

import { authCfg } from '@/configs/auth';

const handler = NextAuth(authCfg);

export { handler as GET, handler as POST };
