import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './pagination.module.scss';

export default function Pagination({totalPages, activePage, setActivePage}) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++ ) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, [totalPages]);

  return (
    <ul className={styles.list}>
      {activePage !== pages[0] &&
        <li>
          <button
            className={cn(styles.button, styles.button_prev)}
            type="button"
            onClick={() => setActivePage((prevPage) => prevPage - 1)}
          >
            Назад
          </button>
        </li>}
      {pages.length > 1 &&
        pages.map((page) => (
          <li key={page} className={styles.list_item}>
            <button
              className={cn(styles.button, page === activePage && styles.button_active)}
              type="button"
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      {activePage !== pages[pages.length - 1] &&
        <li>
          <button
            className={cn(styles.button, styles.button_next)}
            type="button"
            onClick={() => setActivePage((prevPage) => prevPage + 1)}
          >
            Далее
          </button>
        </li>}
    </ul>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};
