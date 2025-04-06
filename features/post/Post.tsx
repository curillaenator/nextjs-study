import React, { FC } from 'react';
import Link from 'next/link';

import type { PostContent } from '@/entities/post';
import styles from './post.module.scss';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel at a.';
const CONTENTS = [...new Array(30)].map(() => lorem.repeat(Math.ceil(Math.random() * 4)));

const Post: FC<PostContent> = (props) => {
  const { id, title, content, date, author } = props;

  return (
    <Link className={styles.post} href={`/blog/${id}`}>
      <h1>{title}</h1>

      <p data-meta>
        {author} {date}
      </p>

      <p>{content}</p>
      <p>{CONTENTS[id] || CONTENTS[4]}</p>
    </Link>
  );
};

export { Post };
