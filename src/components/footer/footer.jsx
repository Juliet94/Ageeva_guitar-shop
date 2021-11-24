import React from 'react';
import {Link} from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img />
          <ul>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Facebook </span>
                <img />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Instagram </span>
                <img />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="visually-hidden"> Twitter </span>
                <img />
              </Link>
            </li>
          </ul>
        <div>
        <div>
          <div>
            <h2>
              О нас
            </h2>
            <p>
              Магазин гитар, <br> музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
            </p>
            <p>
              Все инструменты проверены, отстроены и доведены до идеала!
            </p>
          </div>
          <div>
            <h2>
              Каталог
            </h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Акустические гитары
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Классические гитары
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Электрогитары
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Бас-гитары
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Укулеле
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>
              Информация
            </h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Где купить?
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Вопрос - ответ
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Возврат
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Сервис-центры
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h2>
            Контакты
          </h2>
          <p>
            г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.
          </p>
          <a>
            8-812-500-50-50
          </a>
          <p>
            Режим работы: <br>
            с 11:00 до 20:00, без выходных
          </p>
        </div>
      </div>
    </footer>
  );
}
