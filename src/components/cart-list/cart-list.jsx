import React from 'react';
import styles from './cart-list.module.scss';
import CartListItem from '../cart-list-item/cart-list-item';

export default function CartList() {
  return (
    <ul className={styles.list}>
      <CartListItem />
      <CartListItem />
    </ul>
  );
}
