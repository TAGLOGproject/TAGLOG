/* eslint-disable react/no-children-prop */

'use client';

import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import MarkdownIt from 'markdown-it';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function Editor() {
  const [mdEditorContents, setMdEditorContents] = useState<string>('');

  const handleEditorChange = ({ text }: { text: string }) => {
    setMdEditorContents(text);
  };

  const onCustomImageUpload = async (file: File) => {
    const fileName = encodeURIComponent(file.name);
    const fileType = encodeURIComponent(file.type);

    const res = await fetch(`/api/imgupload?file=${fileName}&fileType=${fileType}`);
    const { url, fields, imgUrl } = await res.json();

    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      return new Promise((resolve) => {
        const imgMdUrl = imgUrl;
        resolve(imgMdUrl);
      });
    }

    throw new Error('Upload failed.');
  };

  return (
    <div>
      <MdEditor
        value={mdEditorContents}
        style={{ height: '700px' }}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={onCustomImageUpload}
      />
    </div>
  );
}
