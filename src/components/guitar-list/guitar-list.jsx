import React from 'react';
import PropTypes from 'prop-types';
import styles from './guitar-list.module.scss';
import GuitarListItem from '../guitar-list-item/guitar-list-item';

export default function GuitarList({guitars}) {

  return (
    <ul className={styles.list}>
      {guitars.map((guitar) => (
        <GuitarListItem key={guitar.id} guitarItem={guitar} />
      ))}
    </ul>
  );
}

GuitarList.propTypes = {
  guitars: PropTypes.arrayOf(PropTypes.shape({
    rating: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
