import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './cart-list-item.module.scss';
import cn from 'classnames';

import Popup from '../popup/popup';

import {PopupType} from '../../const';
import {getSpaces} from '../../utils';
import {increaseTotalPrice, decreaseTotalPrice, changeQuantity, deleteFromCart} from '../../store/actions';

export default function CartListItem({cartItem}) {
  const {
    name,
    price,
    img,
    vendorCode,
    type,
    strings,
    id,
    quantity,
  } = cartItem;

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style = 'overflow: hidden;';
    }

    if (!isModalOpen) {
      document.body.style = 'overflow: visible;';
    }
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(changeQuantity({id: id, quantity: count}));
  }, [id, dispatch, count]);

  const onMinusButtonClick = () => {
    if (count === 1) {
      setIsModalOpen(true);
      return;
    }

    setCount(((prevState) => prevState - 1));
    dispatch(decreaseTotalPrice(price));
  };

  const onPlusButtonClick = () => {
    setCount(((prevState) => prevState + 1));
    dispatch(increaseTotalPrice(price));
  };

  const onInputChange = (evt) => {
    const value = +evt.target.value;
    const prevValue = count;

    if (isNaN(value)) {
      return;
    }

    if (value < 0) {
      return;
    }

    if (value === 0) {
      setIsModalOpen(true);
      return;
    }

    value > prevValue ? dispatch(increaseTotalPrice((value - prevValue) * price)) : dispatch(decreaseTotalPrice((prevValue - value) * price));
    setCount(value);
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteFromCart(id));
    dispatch(decreaseTotalPrice(price * count));
    setIsModalOpen(false);
  };

  return (
    <li className={styles.list_item}>
      <div className={styles.wrapper}>
        <button
          className={styles.button_close}
          type="button"
          onClick={() => setIsModalOpen(true)}
        />
        <img className={styles.img} src={img} alt="Гитара" />
        <div className={styles.desc_wrapper}>
          <h2 className={styles.heading}>
            {type} {name}
          </h2>
          <span className={styles.desc}>
            Артикул: {vendorCode}
          </span>
          <span className={styles.desc}>
            {type}, {strings} струнная
          </span>
        </div>
      </div>
      <div className={styles.wrapper_price_quantity}>
        <div className={styles.price_wrapper}>
          <span className={styles.price}>
            {getSpaces(price)} ₽
          </span>
        </div>
        <div className={styles.quantity_wrapper}>
          <button
            className={cn(styles.button_quantity, styles.button_quantity_minus)}
            type="button"
            onClick={onMinusButtonClick}
          />
          <label>
            <input
              className={styles.quantity_input}
              type="text"
              value={count}
              onChange={onInputChange}
            />
          </label>
          <button
            className={cn(styles.button_quantity, styles.button_quantity_plus)}
            type="button"
            onClick={onPlusButtonClick}
          />
        </div>
        <div className={styles.price_wrapper}>
          <span className={cn(styles.price, styles.price_total)}>
            {getSpaces(price * count)} ₽
          </span>
        </div>
      </div>

      {isModalOpen && (
        <Popup
          popupType={PopupType.DELETE}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          img={img}
          name={name}
          vendorCode={vendorCode}
          type={type}
          strings={strings}
          price={getSpaces(price)}
          onActionButtonClick={onDeleteButtonClick}
        />
      )}
    </li>
  );
}

CartListItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    vendorCode: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
