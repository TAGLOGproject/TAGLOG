/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import styles from './markdownBlogViewer.module.scss';
import SyntaxHighlighter from '../SyntaxHighLighter';

// CodeBlock 컴포넌트 분리
function CodeBlock({ inline, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={xonokai}>
      {children}
    </SyntaxHighlighter>
  ) : (
    <code {...props}>{children}</code>
  );
}

// 이미지 컴포넌트 분리
function MarkdownImage(image: any) {
  const { src, alt } = image;
  return (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={500}
      height={300}
      className={styles.markdownImage}
    />
  );
}

export default function MarkdownBlogViewer({ postData }: { postData: string }) {
  return (
    <div className={styles.markdownWrapper}>
      <ReactMarkdown
        components={{
          code: CodeBlock,
          img: MarkdownImage,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {postData}
      </ReactMarkdown>
    </div>
  );
}
