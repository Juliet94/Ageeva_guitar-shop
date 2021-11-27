import React from 'react';
import cn from 'classnames';
import styles from './filter.module.scss';
import {getSpaces} from '../../utils';

export default function Filter() {
  return (
    <section>
      <h2 className={cn(styles.heading, styles.heading_filter)}>
        Фильтр
      </h2>
      <form>
        <div className={styles.price_wrapper}>
          <h3 className={cn(styles.heading, styles.heading_price)}>
            Цена, ₽
          </h3>
          <div className={styles.price_input_wrapper}>
            <label>
              <input
                className={styles.price_input}
                type="text"
                placeholder={getSpaces(1000)}
              />
            </label>
            <label>
              <input
                className={styles.price_input}
                type="text"
                placeholder={getSpaces(30000)}
              />
            </label>
          </div>
        </div>
        <div className={styles.type_wrapper}>
          <h3 className={cn(styles.heading, styles.heading_type)}>
            Тип гитар
          </h3>
          <ul>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  Акустические гитары
                </span>
              </label>
            </li>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  Электрогитары
                </span>
              </label>
            </li>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  Укулеле
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.strings_wrapper}>
          <h3 className={cn(styles.heading, styles.heading_strings)}>
            Количество струн
          </h3>
          <ul>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  4
                </span>
              </label>
            </li>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  6
                </span>
              </label>
            </li>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  7
                </span>
              </label>
            </li>
            <li className={styles.list_item}>
              <label>
                <input
                  className={cn('visually-hidden', styles.checkbox)}
                  type="checkbox"
                />
                <span className={styles.text}>
                  12
                </span>
              </label>
            </li>
          </ul>
        </div>
        {/*<button>*/}
        {/*  Показать*/}
        {/*</button>*/}
      </form>
    </section>
  );
}
