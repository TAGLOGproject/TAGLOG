/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import { ErrorMessage } from '@hookform/error-message';
import { createPostApi, updatePostApi } from '@/service/post';

import Tag from '@/components/Tag';
import { onCustomImageUpload } from '@/utils/frontend/image';
import useEditor from '@/hooks/useEditor';

import useAuthStore from '@/store/zustand/useAuthStore';
import useUpdatePostStore from '@/store/zustand/useUpdatePostStore';
import styles from './editor.module.scss';

const mdParser = new MarkdownIt(/* Markdown-it options */);

interface IFormValues {
  title: string;
  tagText: string;
}

export default function Editor() {
  const { postData, setPostDataInitialize } = useUpdatePostStore((state) => state);
  const {
    contents: mdEditorContents,
    handleChange: handleEditorChange,
    setContents: setMdEditorContents,
  } = useEditor();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      title: '',
      tagText: '',
    },
  });
  const [tags, setTags] = useState<string[]>([]);
  const postId = useSearchParams()?.get('id');
  const router = useRouter();

  // 수정을 위한 로직
  useEffect(() => {
    if (postId && postData) {
      setValue('title', postData?.title);
      setTags(postData.tags);
      setMdEditorContents(postData.body);
    }
  }, [postData, postId, setMdEditorContents, setPostDataInitialize, setValue]);

  const setUserInfoInit = useAuthStore((state) => state.setUserInfoInit);

  const onAddTag = () => {
    const tagText = watch('tagText');
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
    setValue('tagText', '');
  };

  const onDeleteTag = (tag: string) => {
    const filterdTag = tags.filter((v) => v !== tag);
    setTags(filterdTag);
  };

  const createOrUpdatePost: SubmitHandler<IFormValues> = async (values) => {
    const { title } = values;
    try {
      const reqBody = {
        title,
        tags,
        body: mdEditorContents,
      };

      if (postId && postData) {
        await updatePostApi({ ...reqBody, postId });
        setPostDataInitialize();
        toast.success('수정이 완료되었습니다');
      } else {
        await createPostApi(reqBody);
        toast.success('포스트가 생성되었습니다');
      }
      router.push('/');
    } catch (error: any) {
      if (title === '') {
        toast.error('제목을 입력해 주세요');
        return;
      }
      if (error.response.status === 500) {
        toast.error('server error');
        return;
      }
      if (error.response.status === 401) {
        toast.error('Unauthorized : 로그인을 다시 해주세요');
        setUserInfoInit();
        router.push('/');
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(createOrUpdatePost)} className={styles.container}>
      <div className={styles.titleContainer}>
        <input
          {...register('title', { required: 'title을 작성해주세요.' })}
          className={styles.titleInput}
          type="text"
          placeholder="Title을 작성해주세요."
        />
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => <p className={styles.errorMessage}>{message}</p>}
        />
      </div>
      <div>
        <div className={styles.tagInputContainer}>
          <input
            {...register('tagText')}
            className={styles.tagInput}
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
          <Tag key={tag} tag={tag} onDelete={onDeleteTag} />
        ))}
      </div>
      <MdEditor
        value={mdEditorContents}
        style={{ height: '700px' }}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={onCustomImageUpload}
      />
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}
