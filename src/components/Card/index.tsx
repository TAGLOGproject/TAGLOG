'use client';

import React from 'react';
import useFetchCards from '@/hooks/useFetchCards';
import CardFilter from './CardFilter/CardFilter';
import CardList from './CardList/CardList';
import LoadingUI from '../LoadingUI';

function Card() {
  const { cardsData, isLoading } = useFetchCards();
  const cards = cardsData;

  return (
    <>
      {isLoading ? null : <CardFilter />}
      {isLoading ? <LoadingUI type="center" /> : <CardList cards={cards} />}
    </>
  );
}

export default Card;
