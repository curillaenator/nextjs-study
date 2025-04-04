'use client';

import styles from './page.module.scss';

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div className={styles.page}>
      <span>{`Oops... ${error.message}`}</span>
    </div>
  );
}
