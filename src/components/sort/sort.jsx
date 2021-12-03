import React from 'react';
import PropTypes from 'prop-types';
import styles from './sort.module.scss';
import cn from 'classnames';

import {SortType, SortOrder} from '../../const';

export default function Sort({activeSortType, setActiveSortType, activeSortOrder, setActiveSortOrder}) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className="visually-hidden"> Сортировка </h2>
        <span className={styles.sort}>
          Сортировать:
        </span>
        <div>
          <button
            className={cn(styles.button_type, styles.button_type_price, activeSortType === SortType.PRICE && styles.button_type_active)}
            type="button"
            onClick={() => setActiveSortType(SortType.PRICE)}
          >
            по цене
          </button>
          <button
            className={cn(styles.button_type, activeSortType === SortType.POPULAR && styles.button_type_active)}
            type="button"
            onClick={() => setActiveSortType(SortType.POPULAR)}
          >
            по популярности
          </button>
        </div>
      </div>
      <div>
        <button
          className={cn(styles.button, styles.button_up, activeSortOrder === SortOrder.UP && styles.button_up_active)}
          type="button"
          onClick={() => {
            setActiveSortOrder(SortOrder.UP);
            if (activeSortType === '') {
              setActiveSortType(SortType.PRICE);
            }
          }}
          aria-label="Отсортировать по возрастанию"
        />
        <button
          className={cn(styles.button, styles.button_down, activeSortOrder === SortOrder.DOWN && styles.button_down_active)}
          type="button"
          onClick={() => {
            setActiveSortOrder(SortOrder.DOWN);
            if (activeSortType === '') {
              setActiveSortType(SortType.PRICE);
            }
          }}
          aria-label="Отсортировать по убыванию"
        />
      </div>
    </section>
  );
}

Sort.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  setActiveSortType: PropTypes.func.isRequired,
  activeSortOrder: PropTypes.string.isRequired,
  setActiveSortOrder: PropTypes.func.isRequired,
};
