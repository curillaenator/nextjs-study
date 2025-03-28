'use client';

import styles from './blog.module.scss';

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div className={styles.blog}>
      <span>{`Oops... ${error.message}`}</span>
    </div>
  );
}
