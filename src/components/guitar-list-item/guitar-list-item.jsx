import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import cn from 'classnames';
import styles from './guitar-list-item.module.scss';

import {getSpaces} from '../../utils';

export default function GuitarListItem({guitarItem}) {
  const {
    rating,
    popularity,
    name,
    price,
    img,
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
        >
          Купить
        </button>
      </div>
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
  }).isRequired,
};
