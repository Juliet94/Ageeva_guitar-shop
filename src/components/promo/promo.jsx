import React from 'react';
import styles from './promo.module.scss';

export default function Promo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Промокод на скидку
      </h2>
      <p>
        Введите свой промокод, если он у вас есть.
      </p>
      <form>
        <label>
          <input
            className={styles.input}
            type="text"
          />
        </label>
        <button
          className={styles.button}
          type="submit"
        >
          Применить купон
        </button>
        </form>
      </div>
    </div>
  );
}
