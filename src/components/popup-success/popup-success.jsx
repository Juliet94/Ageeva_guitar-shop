import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import cn from 'classnames';

import styles from '../popup-success/popup-success.module.scss';

import {AppRoute} from '../../const';

export default function PopupSuccess({isOpen, setIsOpen}) {
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
            Товар успешно добавлен в корзину
          </h2>
          <button
            className={styles.button_close}
            type="button"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className={styles.button_wrapper}>
          <Link className={cn(styles.button, styles.button_to_cart)} to={AppRoute.CART}>
            Перейти в корзину
          </Link>
          <button
            className={cn(styles.button, styles.button_continue)}
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

PopupSuccess.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
