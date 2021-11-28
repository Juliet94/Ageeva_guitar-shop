import React from 'react';
import styles from './cart.module.scss';

import Header from '../header/header';
import Footer from '../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CartList from '../cart-list/cart-list';
import Promo from '../promo/promo';
import Order from '../order/order';

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.heading_wrapper}>
          <h1 className={styles.heading}>
            Корзина
          </h1>
          <Breadcrumbs isCart />
        </div>
        <section className={styles.section}>
          <CartList />
          <div className={styles.promo_wrapper}>
            <Promo />
            <Order />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
