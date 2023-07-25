'use client';

import { useEffect, useRef, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import MarkdownIt from 'markdown-it';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function Editor() {
  const [mdEditorContents, setMdEditorContents] = useState<string>();

  const handleEditorChange = ({ text }: { text: string }) => {
    setMdEditorContents(text);
  };

  const onCustomImageUpload = (event: File) => {
    return new Promise((resolve, reject) => {
      const imgMdUrl = 'hello';
      resolve(imgMdUrl);
    });
  };

  return (
    <div>
      <MdEditor
        value={mdEditorContents}
        style={{ height: '500px' }}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={onCustomImageUpload}
      />
      {mdEditorContents}
    </div>
  );
}
