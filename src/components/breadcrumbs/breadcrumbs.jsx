import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './breadcrumbs.module.scss';

export default function Breadcrumbs({isCart = false}) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link className={cn(styles.link, styles.link_arrow)} to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className={cn(styles.link, styles.link_arrow)} to="/">
            Каталог
          </Link>
        </li>
        {isCart && <li>
          <Link className={(styles.link)} to="/">
            Оформляем
          </Link>
        </li>}
    </div>
  );
}
