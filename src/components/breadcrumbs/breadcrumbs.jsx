import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './breadcrumbs.module.scss';

export default function Breadcrumbs() {
  return (
    <div className={styles.wrapper}>
      <Link className={cn(styles.link, styles.link_main)} to="/">
        Главная
      </Link>
      <Link className={styles.link} to="/">
        Каталог
      </Link>
    </div>
  );
}
