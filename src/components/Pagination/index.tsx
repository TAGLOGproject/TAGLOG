import React, { useState } from 'react';
import styles from './pagination.module.scss';

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPosts: number;
  postsPerPage: number;
}

function Pagination({ currentPage, setCurrentPage, totalPosts, postsPerPage }: IPaginationProps) {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(3);

  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginateNextPage = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    }
  };

  const paginatePrevPage = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <li className={currentPage === pageNumbers[0] ? `${styles.hidden}` : ''}>
        <button type="button" onClick={paginatePrevPage}>
          {'<'}
        </button>
      </li>

      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li key={number} className={currentPage === number ? `${styles.active}` : ''}>
              <button type="button" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          );
        }
        return null;
      })}

      <li className={currentPage === pageNumbers[pageNumbers.length - 1] ? `${styles.hidden}` : ''}>
        <button type="button" onClick={paginateNextPage}>
          {'>'}
        </button>
      </li>
    </div>
  );
}

export default Pagination;
