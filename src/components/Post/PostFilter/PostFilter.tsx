'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import classNames from 'classnames';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';
import { TagType } from '@/types/tag';
import styles from './postFilter.module.scss';

const FILTERED_TAGS: TagType[] = ['All', 'Javascript', 'React', 'Typescript', 'Next'];

function PostFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const { selectedTag, setTag } = useFilteredPostsStore();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleFilterClick = (tag: TagType) => {
    setTag(tag);
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mouseleave', handleMouseLeave);
      currentRef.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <button className={styles.button} type="button">
        {selectedTag}
        <AiFillCaretDown size={10} />
      </button>
      <div className={classNames(styles.listWrapper)}>
        {isOpen && (
          <ul className={styles.ul}>
            {FILTERED_TAGS.map((item) => (
              <li key={item} className={styles.li}>
                <button type="button" onClick={() => handleFilterClick(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PostFilter;
