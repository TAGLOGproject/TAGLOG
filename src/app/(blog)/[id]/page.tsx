import React from 'react';
import MarkdownBlogViewer from '@/components/MarkdownBlogViewer';
import { BlogMockingData } from '@/Mock/blog';

export default async function BlogPage() {
  return <MarkdownBlogViewer postData={BlogMockingData} />;
}
