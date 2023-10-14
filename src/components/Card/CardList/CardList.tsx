import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './cardLIst.module.scss';

function CardList() {
  return (
    <div className={styles.container}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}

export default CardList;
