import React, { FC } from 'react';
import Link from 'next/link';

import type { PostContent } from '@/entities/post';
import styles from './post.module.scss';

import { CONTENTS } from '@/mock/postContents';

const Post: FC<PostContent> = (props) => {
  const { id, title, content, date, author } = props;

  return (
    <Link className={styles.post} href={`/blog/${id}`}>
      <h1>{title}</h1>

      <p data-meta>
        {author} {date}
      </p>

      <p>{CONTENTS[id] || content}</p>
    </Link>
  );
};

export { Post };
