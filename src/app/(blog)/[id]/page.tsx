/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogMockingData } from '@/Mock/blog';
import styles from './blog.module.scss';

export default async function BlogPage() {
  return (
    <div className={styles.markdownWrapper}>
      <ReactMarkdown children={BlogMockingData} remarkPlugins={[remarkGfm]} />
    </div>
  );
}
