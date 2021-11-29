import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import cn from 'classnames';
import styles from './guitar-list-item.module.scss';

import Popup from '../popup/popup';
import PopupSuccess from '../popup-success/popup-success';

import {getSpaces} from '../../utils';
import {PopupType} from '../../const';

export default function GuitarListItem({guitarItem}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen || isModalSuccessOpen) {
      document.body.style = 'overflow: hidden;';
    }

    if (!isModalOpen || !isModalSuccessOpen) {
      document.body.style = 'overflow: visible;';
    }
  }, [isModalOpen, isModalSuccessOpen]);

  const {
    rating,
    popularity,
    name,
    price,
    img,
    vendorCode,
    type,
    strings,
  } = guitarItem;

  return (
    <li className={styles.list_item}>
      <img className={styles.img} src={img} alt="Гитара"/>
      <div className={styles.wrapper}>
        <StarRatings
          rating={rating}
          starRatedColor="#FFD168"
          numberOfStars={5}
          starDimension="12px"
          starSpacing="1px"
        />
        <span className={styles.popularity}>
          {popularity}
        </span>
      </div>
      <div className={styles.wrapper_heading}>
        <h3 className={styles.heading}>
          {name}
        </h3>
        <span className={styles.price}>
          {getSpaces(price)} ₽
        </span>
      </div>
      <div className={styles.wrapper_button}>
        <button
          className={cn(styles.button, styles.button_more)}
          type="button"
        >
          Подробнее
        </button>
        <button
          className={cn(styles.button, styles.button_buy)}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Купить
        </button>
      </div>
      {isModalOpen && (
        <Popup
          popupType={PopupType.ADD}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          img={img}
          name={name}
          vendorCode={vendorCode}
          type={type}
          strings={strings}
          price={getSpaces(price)}
          setIsModalSuccessOpen={setIsModalSuccessOpen}
        />
      )}
      {isModalSuccessOpen && <PopupSuccess isOpen={isModalSuccessOpen} setIsOpen={setIsModalSuccessOpen} />}
    </li>
  );
}

GuitarListItem.propTypes = {
  guitarItem: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    vendorCode: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
  }).isRequired,
};
