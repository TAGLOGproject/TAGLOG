'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import classNames from 'classnames';
import { ICard } from '@/types/card';
import styles from './cardFilter.module.scss';

const FILTER_OPTIONS = ['All', 'React', 'TypeScript', 'Next'];

function CardFilter({ id }: ICard) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedList, setClickedList] = useState('All');

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleListClick = (item: string) => {
    setClickedList(item);
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
        {clickedList}
        <AiFillCaretDown size={10} />
      </button>
      <div className={classNames(styles.listWrapper)}>
        {isOpen && (
          <ul className={styles.ul}>
            {FILTER_OPTIONS.map((item) => (
              <li key={item} className={styles.li}>
                <button type="button" onClick={() => handleListClick(item)}>
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

export default CardFilter;
