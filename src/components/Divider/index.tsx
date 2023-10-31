import React from 'react';
import styles from './divider.module.scss';

interface IDividerProps {
  space?: number;
  color?: string;
  [x: string]: any;
}

export default function Divider({ space = 22, ...restProps }: IDividerProps) {
  const style = {
    marginTop: space,
    marginBottom: space,
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div className={styles.line} style={style} {...restProps} />;
}
