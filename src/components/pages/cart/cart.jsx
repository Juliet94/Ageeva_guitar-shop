import React from 'react';
import {useSelector} from 'react-redux';
import styles from './cart.module.scss';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CartList from '../../cart-list/cart-list';
import Promo from '../../promo/promo';
import Order from '../../order/order';

import {getCart} from '../../../store/selectors';

export default function Cart() {
  const cart = useSelector(getCart);

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
        {cart.length > 0 ?
          <section className={styles.section}>
            <CartList/>
            <div className={styles.promo_wrapper}>
              <Promo/>
              <Order/>
            </div>
          </section>
          : <p className={styles.none}> Здесь пока ничего нет... </p>}
      </main>
      <Footer />
    </div>
  );
}
