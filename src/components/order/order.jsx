import React from 'react';
import {useSelector} from 'react-redux';
import styles from './order.module.scss';

import {getTotalPrice, getDiscount} from '../../store/selectors';
import {getSpaces} from '../../utils';

export default function Order() {
  const totalPrice = useSelector(getTotalPrice);
  const discount = useSelector(getDiscount);

  return (
    <div className={styles.wrapper}>
      <span className={styles.price}>
        Всего: {getSpaces(totalPrice - discount)} ₽
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
