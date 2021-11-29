import React from 'react';
import styles from './cart-list-item.module.scss';
import cn from 'classnames';

import guitar from '../../assets/images/electric-guitar-preview.jpg';

export default function CartListItem() {
  return (
    <li className={styles.list_item}>
      <button
        className={styles.button_close}
        type="button"
      />
      <img className={styles.img} src={guitar} alt="Гитара" />
      <div className={styles.desc_wrapper}>
        <h2 className={styles.heading}>
          Электрогитара Честер Bass
        </h2>
        <span className={styles.desc}>
          Артикул: SO757575
        </span>
        <span className={styles.desc}>
          Электрогитара, 6 струнная
        </span>
      </div>
      <div className={styles.price_wrapper}>
        <span className={styles.price}>
          17 500 ₽
        </span>
      </div>
      <div className={styles.quantity_wrapper}>
        <button
          className={cn(styles.button_quantity, styles.button_quantity_minus)}
          type="button"
        />
        <label>
          <input
            className={styles.quantity_input}
            type="text"
            value="1"
            min="1"
          />
        </label>
        <button
          className={cn(styles.button_quantity, styles.button_quantity_plus)}
          type="button"
        />
      </div>
      <div className={styles.price_wrapper}>
        <span className={cn(styles.price, styles.price_total)}>
          17 500 ₽
        </span>
      </div>
    </li>
  );
}
