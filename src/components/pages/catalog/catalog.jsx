import React from 'react';
import styles from './catalog.module.scss';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Filter from '../../filter/filter';
import GuitarCatalog from '../../guitar-catalog/guitar-catalog';

export default function Catalog() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.heading_wrapper}>
          <h1 className={styles.heading}>
            Каталог гитар
          </h1>
          <Breadcrumbs />
        </div>
        <div className={styles.inner}>
          <Filter />
          <GuitarCatalog />
        </div>
      </main>
      <Footer />
    </div>
  );
}
