'use client';

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { xonokai, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
  language: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function SyntaxHighlighter({ language, children, ...props }: IProps) {
  return (
    <Prism language={language} PreTag="div" {...props} style={oneLight}>
      {String(children).replace(/\n$/, '')}
    </Prism>
  );
}
