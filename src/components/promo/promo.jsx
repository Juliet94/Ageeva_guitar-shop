import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './promo.module.scss';

import {PromoCode} from '../../const';
import {setDiscount} from '../../store/actions';
import {getTotalPrice} from '../../store/selectors';

export default function Promo() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);

  const [promo, setPromo] = useState('');
  const [isPromoValid, setIsPromoValid] = useState(true);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (PromoCode.GITARAHIT.name === promo) {
      const discount = totalPrice / PromoCode.GITARAHIT.discountPercent;
      dispatch(setDiscount(discount));
      return;
    }

    if (PromoCode.SUPERGITARA.name === promo) {
      const discount = PromoCode.SUPERGITARA.discount;
      dispatch(setDiscount(discount));
      return;
    }

    if (PromoCode.GITARA2020.name === promo) {
      const maxDiscountPercent = totalPrice / 100 * PromoCode.GITARA2020.maxDiscountPercent;

      const discount = PromoCode.GITARA2020.discount > maxDiscountPercent ? maxDiscountPercent : PromoCode.GITARA2020.discount;
      dispatch(setDiscount(discount));
      return;
    }

    setIsPromoValid(false);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Промокод на скидку
      </h2>
      <p className={styles.text}>
        Введите свой промокод, если он у вас есть.
      </p>
      <form
        className={styles.form}
        onSubmit={onFormSubmit}
      >
        <label>
          <input
            className={styles.input}
            type="text"
            required
            value={promo}
            onChange={(evt) => {
              setPromo(evt.target.value.toUpperCase());
              setIsPromoValid(true);
            }}
          />
        </label>
        <button
          className={styles.button}
          type="submit"
        >
          Применить купон
        </button>
      </form>
      {!isPromoValid && <p className={styles.wrong}> Промокод не действителен</p>}
    </div>
  );
}
