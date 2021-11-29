import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cn from 'classnames';

import styles from './popup.module.scss';

import {PopupType} from '../../const';

export default function Popup({popupType, isOpen, setIsOpen, img, name, vendorCode, type, strings, price, setIsModalSuccessOpen}) {
  const onAddButtonClick = () => {
    setIsOpen(false);
    setIsModalSuccessOpen(true);
  };

  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
    >
      <div className={styles.wrapper}>
        <div className={styles.heading_wrapper}>
          <h2 className={styles.heading}>
            {popupType === PopupType.ADD ? 'Добавить товар в корзину' : 'Удалить этот товар?'}
          </h2>
          <button
            className={styles.button_close}
            type="button"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className={styles.inner_wrapper}>
          <div className={styles.img_wrapper}>
            <img className={styles.img} src={img}  alt="Гитара"/>
            <div className={styles.desc_wrapper}>
              <h3 className={styles.guitar_name}>
                Гитара {name}
              </h3>
              <span className={styles.desc}>
                Артикул: {vendorCode}
              </span>
              <span className={styles.desc}>
                {type}, {strings} струнная
              </span>
              <span className={styles.price}>
                Цена: {price} ₽
              </span>
            </div>
          </div>
          <div className={styles.button_wrapper}>
            <button
              className={cn(styles.button, styles.button_action)}
              type="button"
              onClick={onAddButtonClick}
            >
              {popupType === PopupType.ADD ? 'Добавить в корзину' : 'Удалить товар'}
            </button>
            {popupType === PopupType.DELETE && (
              <button
                className={cn(styles.button, styles.button_continue)}
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Продолжить покупки
              </button>
            )}
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

Popup.propTypes = {
  popupType: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  setIsModalSuccessOpen: PropTypes.func,
};
