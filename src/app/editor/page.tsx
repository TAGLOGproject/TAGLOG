'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

function TextEditor() {
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  function submitHandler(event: any) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      {/* <label>Title</label> */}
      <QuillNoSSRWrapper modules={modules} onChange={setContent} theme="snow" />
      <button type="button">Save</button>
      <p>{content}</p>
    </form>
  );
}

export default TextEditor;
