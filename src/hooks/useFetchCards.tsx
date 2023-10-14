import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { getCardsAPI } from '@/service/card';

const useFetchCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCards = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getCardsAPI();
      setCardsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);
  return { cardsData, isLoading };
};

export default useFetchCards;