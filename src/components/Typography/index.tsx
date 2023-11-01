/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';

import classNames from 'classnames';
import styles from './typography.module.scss';

interface ITypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'span';
  className?: string;
  children: React.ReactNode;
}

function Typography({ variant = 'span', className, children }: ITypographyProps) {
  const getComponentAndClassName = (): [keyof JSX.IntrinsicElements, string] => {
    switch (variant) {
      case 'h1':
        return ['h1', styles.heading1];
      case 'h2':
        return ['h2', styles.heading2];
      case 'h3':
        return ['h3', styles.heading3];
      case 'h4':
        return ['h4', styles.heading4];
      case 'title1':
        return ['h2', styles.title1];
      case 'title2':
        return ['p', styles.title2];
      case 'title3':
        return ['p', styles.title3];
      case 'title4':
        return ['p', styles.title4];
      case 'body1':
        return ['p', styles.body1];
      case 'body2':
        return ['p', styles.body2];
      case 'body3':
        return ['p', styles.body3];
      case 'body4':
        return ['p', styles.body4];
      case 'span':
      default:
        return ['span', styles.span];
    }
  };

  const [Component, defaultClassName] = getComponentAndClassName();

  const combinedClassName = classNames(defaultClassName, className); // 기존 className과 추가 className을 결합

  return <Component className={combinedClassName}>{children}</Component>;
}

export default Typography;
