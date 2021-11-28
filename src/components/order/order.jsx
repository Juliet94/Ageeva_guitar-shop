import React from 'react';
import styles from './order.module.scss';

export default function Order() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.price}>
        Всего: 47 000 ₽
      </span>
      <button
        className={styles.button}
        type="button"
      >
        Оформить заказ
      </button>
    </div>
  );
}
