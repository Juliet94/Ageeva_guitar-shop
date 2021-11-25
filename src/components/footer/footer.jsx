import React from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.scss';
import cn from 'classnames';

import guitar from '../../assets/images/guitar-footer.jpg';
import logo from '../../assets/images/logo-white.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';

export default function Footer() {
  return (
    <footer>
      <div className={styles.guitar_wrapper}>
        <img src={guitar} alt="Электрогитара"/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <div className={styles.logo_wrapper}>
            <img className={styles.img_logo} src={logo} alt="Логотип Guitar-Shop"/>
            <ul className={styles.icon_list}>
              <li className={styles.icon}>
                <Link to="/">
                  <span className="visually-hidden"> Facebook </span>
                  <img src={facebook} alt="Иконка Фэйсбука"/>
                </Link>
              </li>
              <li className={styles.icon}>
                <Link to="/">
                  <span className="visually-hidden"> Instagram </span>
                  <img src={instagram} alt="Иконка Инстаграма"/>
                </Link>
              </li>
              <li className={styles.icon}>
                <Link to="/">
                  <span className="visually-hidden"> Twitter </span>
                  <img src={twitter} alt="Иконка Твиттера"/>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menu_wrapper}>
            <div className={styles.info_wrapper}>
              <h2 className={styles.heading}>
                О нас
              </h2>
              <p className={styles.text_about}>
                Магазин гитар, <br /> музыкальных инструментов и гитарная мастерская в Санкт&#8209;Петербурге.
              </p>
              <p className={styles.text_check}>
                Все инструменты проверены, отстроены и доведены до идеала!
              </p>
            </div>
            <div className={cn(styles.info_wrapper, styles.info_wrapper_catalog)}>
              <h2 className={styles.heading}>
                Каталог
              </h2>
              <nav>
                <ul className={styles.list}>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Акустические гитары
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Классические гитары
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Электрогитары
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Бас-гитары
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Укулеле
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={cn(styles.info_wrapper, styles.info_wrapper_info)}>
              <h2 className={styles.heading}>
                Информация
              </h2>
              <nav>
                <ul className={styles.list}>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Где купить?
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Блог
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Вопрос - ответ
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Возврат
                    </Link>
                  </li>
                  <li className={styles.list_item}>
                    <Link to="/">
                      Сервис-центры
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={cn(styles.info_wrapper, styles.info_wrapper_contacts)}>
            <h2 className={cn(styles.heading, styles.heading_contacts)}>
              Контакты
            </h2>
            <p className={cn(styles.text, styles.text_city)}>
              г.&nbsp;Санкт-Петербург, м.&nbsp;Невский проспект, ул.&nbsp;Казанская&nbsp;6.
            </p>
            <a className={styles.tel} href="tel: 88125005050">
              &ensp;&ensp;8-812-500-50-50
            </a>
            <p className={cn(styles.text, styles.text_work)}>
              Режим работы: <br />
              &ensp;&ensp;с 11:00 до 20:00, <br /> без выходных.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
