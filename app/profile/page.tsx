import type { Metadata } from 'next';
import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authCfg } from '@/configs/auth';

import styles from './profile.module.scss';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Profile() {
  const session = await getServerSession(authCfg);

  return (
    <div className={styles.profile}>
      {session?.user?.image && <Image src={session.user.image} alt={session.user.name!} width={200} height={200} />}

      <div className={styles.meta}>
        <h1>{session?.user?.name || 'N/A'}</h1>
        <p>{session?.user?.email || 'N/A'}</p>
      </div>
    </div>
  );
}
