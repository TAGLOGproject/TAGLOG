/* eslint-disable react/no-children-prop */

'use client';

import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createPostAPI } from '@/service/post';

import Tag from '@/components/Tag';
import styles from './editor.module.scss';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function Editor() {
  const [title, setTitle] = useState<string>('');
  const [tagText, setTagText] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [mdEditorContents, setMdEditorContents] = useState<string>('');

  const router = useRouter();

  const handleEditorChange = ({ text }: { text: string }) => {
    setMdEditorContents(text);
  };
  const onCustomImageUpload = async (file: File) => {
    const fileName = encodeURIComponent(file.name);

    const fileType = encodeURIComponent(file.type);
    const api = `/api/imgupload?file=${fileName}&fileType=${fileType}`;

    const res = await fetch(api);
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

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onAddTag = () => {
    const trimedText = tagText.trim();
    if (!trimedText) {
      toast.error('태그를 입력해 주세요');
      return;
    }
    if (tags.includes(trimedText)) {
      toast.error('중복된 태그입니다');
      return;
    }
    setTags([...tags, trimedText]);
    setTagText('');
  };

  const onDeleteTag = (tag: string) => {
    const filterdTag = tags.filter((t) => t !== tag);
    setTags(filterdTag);
  };

  const createPost = async () => {
    try {
      await createPostAPI({ title, tags, body: mdEditorContents });
      toast.success('포스트가 생성되었습니다');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <input
          className={styles.titleInput}
          value={title}
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <div className={styles.tagInputContainer}>
          <input
            className={styles.tagInput}
            value={tagText}
            onChange={(e) => {
              setTagText(e.target.value);
            }}
            type="text"
            placeholder="태그를 추가해 주세요"
          />
          <button className={styles.addButton} type="button" onClick={onAddTag}>
            ADD
          </button>
        </div>
      </div>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <Tag tag={tag} onDelete={onDeleteTag} />
        ))}
      </div>
      <MdEditor
        value={mdEditorContents}
        style={{ height: '700px' }}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={onCustomImageUpload}
      />
      <button className={styles.submitButton} type="button" onClick={createPost}>
        Submit
      </button>
    </div>
  );
}
