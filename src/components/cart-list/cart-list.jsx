import React from 'react';
import {useSelector} from 'react-redux';
import styles from './cart-list.module.scss';
import CartListItem from '../cart-list-item/cart-list-item';

import {getCart} from '../../store/selectors';

export default function CartList() {
  const cart = useSelector(getCart);

  return (
    <ul className={styles.list}>
      {cart.map((cartItem) => (
        <CartListItem key={cartItem.id} cartItem={cartItem}/>
      ))}
    </ul>
  );
}
