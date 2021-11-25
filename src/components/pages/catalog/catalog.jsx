import React from 'react';
import styles from './catalog.module.scss';
import Header from '../../header/header';
import Footer from '../../footer/footer';

export function Catalog() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main />
      <Footer />
    </div>
  );
}
