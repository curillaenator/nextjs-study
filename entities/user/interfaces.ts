import type { User as NextUser } from 'next-auth';

type NextAppUserRole = 'admin' | 'guest';

interface NextAppUser extends NextUser {
  id: string;
  email: string;
  name: string;
  password: string;
  role: NextAppUserRole;
}

export type { NextAppUserRole, NextAppUser };
