'use client';

import QuillNoSSRWrapper from '@/components/QuillNoSSRWrapper';
import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import ReactMarkdown from 'react-markdown';

import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { HtmlType } from 'react-markdown-editor-lite/cjs/editor/preview';
import MarkdownIt from 'markdown-it';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function Editor() {
  const [contents, setContents] = useState<string>();
  const [mdEditorContents, setMdEditorContents] = useState<string>();
  const quillRef = useRef<ReactQuill>(null);

  const modules = {
    toolbar: [
      ['link', 'image', 'video'],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const handleEditorChange = ({ text }) => {
    setMdEditorContents(text);
  };
  console.log(quillRef);
  useEffect(() => {
    const handleImage = () => {
      const input = document.createElement('input');
      console.log({ input });
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.onchange = async () => {
        const file = input.files[0];
        console.log(file);

        // 현재 커서 위치 저장
        const range = quillRef.current!.getEditor().getSelection(true);

        // 서버에 올려질때까지 표시할 로딩 placeholder 삽입
        quillRef.current!.getEditor().insertEmbed(range.index, 'image', `/images/loading.gif`);
      };
    };

    if (quillRef.current) {
      const toolbar = quillRef.current.getEditor().getModule('toolbar');
      toolbar.addHandler('image', handleImage);
    }
  }, []);

  const onChangeQuill = (content: string) => {
    setContents(content);
  };

  return (
    <div>
      {/* <QuillNoSSRWrapper modules={modules} forwardedRef={quillRef} value={contents} />; */}
      <ReactQuill modules={modules} ref={quillRef} value={contents} onChange={onChangeQuill} />
      {contents}
      {/* <ReactQuill modules={modules} value={contents} readOnly />
      마크다운
      <ReactMarkdown>{contents}</ReactMarkdown> */}
      <MdEditor
        plugins={['image']}
        value={mdEditorContents}
        style={{ height: '500px' }}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={(file: any) => {
          console.log(file);
        }}
      />
    </div>
  );
}
