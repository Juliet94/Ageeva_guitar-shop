import React from 'react';
import {Link} from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div>
        <img />
        <nav>
          <ul>
            <li>
              <Link to="/">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/">
                Где купить?
              </Link>
            </li>
            <li>
              <Link to="/">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/">
                Сервис-центры
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Местоположение </span>
                <img />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Поиск </span>
                <img />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Корзина </span>
                <span> 2 </span>
                <img />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
