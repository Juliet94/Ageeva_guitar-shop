import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import styles from './filter.module.scss';

import {getSpaces, getNumber, getSortedGuitars, getFilteredGuitars} from '../../utils';
import {SortType, SortOrder, GuitarType, GuitarString} from '../../const';
import {changeFilterPriceFrom, changeFilterPriceTo, changeFilterType, changeFilterStrings} from '../../store/actions';
import {getGuitars, getFilterType, getFilterStrings} from '../../store/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const guitars = useSelector(getGuitars);
  const filterType = useSelector(getFilterType);
  const filterStrings = useSelector(getFilterStrings);

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [types, setTypes] = useState({});
  const [strings, setStrings] = useState({});

  useEffect(() => {
    const filteredTypes = [];

    for (const type in types) {
      if (types[type]) {
        filteredTypes.push(type);
      }
    }

    dispatch(changeFilterType(filteredTypes));
  }, [dispatch, types]);

  useEffect(() => {
    const filteredStrings = [];

    for (const string in strings) {
      if (strings[string]) {
        filteredStrings.push(+string);
      }
    }

    dispatch(changeFilterStrings(filteredStrings));
  }, [dispatch, strings]);

  const sortedGuitarsPrice = getSortedGuitars(guitars, SortType.PRICE, SortOrder.UP);
  const minPrice = sortedGuitarsPrice[0].price;
  const maxPrice = sortedGuitarsPrice[sortedGuitarsPrice.length - 1].price;

  const onPriceFromChange = (evt) => {
    const price = getNumber(evt.target.value);
    setPriceFrom(getSpaces(price));
  };

  const onPriceToChange = (evt) => {
    const price = getNumber(evt.target.value);
    setPriceTo(getSpaces(price));
  };

  const onPriceFromBlur = (evt) => {
    const price = getNumber(evt.target.value);

    if (!price) {
      setPriceFrom('');
      return;
    }

    if (price <= minPrice) {
      setPriceFrom(getSpaces(minPrice));
      dispatch(changeFilterPriceFrom(minPrice));
      return;
    }

    if (price >= maxPrice) {
      setPriceTo(getSpaces(maxPrice));
      dispatch(changeFilterPriceTo(maxPrice));
      return;
    }

    if (getNumber(price) >= getNumber(priceTo) && priceTo) {
      setPriceFrom(getSpaces(priceTo));
      dispatch(changeFilterPriceFrom(priceTo));
      return;
    }

    setPriceFrom(getSpaces(price));
    dispatch(changeFilterPriceFrom(price));
  };

  const onPriceToBlur = (evt) => {
    const price = getNumber(evt.target.value);

    if (!price) {
      setPriceTo('');
      return;
    }

    if (getNumber(price) <= getNumber(priceFrom) && priceFrom) {
      setPriceTo(getSpaces(priceFrom));
      dispatch(changeFilterPriceTo(priceFrom));
      return;
    }

    if (price <= minPrice) {
      setPriceFrom(getSpaces(minPrice));
      dispatch(changeFilterPriceFrom(minPrice));
      return;
    }

    if (price >= maxPrice) {
      setPriceTo(getSpaces(maxPrice));
      dispatch(changeFilterPriceTo(maxPrice));
      return;
    }

    setPriceTo(getSpaces(price));
    dispatch(changeFilterPriceTo(price));
  };

  const onCheckboxTypeChange = (evt) => {
    setTypes((prevState) => ({
      ...prevState,
      [evt.target.value]: evt.target.checked,
    }));
  };

  const onCheckboxStringsChange = (evt) => {
    setStrings((prevState) => ({
      ...prevState,
      [evt.target.value]: evt.target.checked,
    }));
  };

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
                placeholder={minPrice}
                value={priceFrom}
                onChange={onPriceFromChange}
                onBlur={onPriceFromBlur}
              />
            </label>
            <label>
              <input
                className={styles.price_input}
                type="text"
                placeholder={maxPrice}
                value={priceTo}
                onChange={onPriceToChange}
                onBlur={onPriceToBlur}
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
                  value={GuitarType.ACOUSTIC}
                  onChange={onCheckboxTypeChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', [], filterStrings).some((guitar) => guitar.typeFilter === GuitarType.ACOUSTIC)
                  }
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
                  value={GuitarType.ELECTRIC}
                  onChange={onCheckboxTypeChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', [], filterStrings).some((guitar) => guitar.typeFilter === GuitarType.ELECTRIC)
                  }
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
                  value={GuitarType.UKULELE}
                  onChange={onCheckboxTypeChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', [], filterStrings).some((guitar) => guitar.typeFilter === GuitarType.UKULELE)
                  }
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
                  value={GuitarString.FOUR}
                  onChange={onCheckboxStringsChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', filterType, filterStrings).some((guitar) => guitar.strings === GuitarString.FOUR)
                  }
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
                  value={GuitarString.SIX}
                  onChange={onCheckboxStringsChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', filterType, filterStrings).some((guitar) => guitar.strings === GuitarString.SIX)
                  }
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
                  value={GuitarString.SEVEN}
                  onChange={onCheckboxStringsChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', filterType, filterStrings).some((guitar) => guitar.strings === GuitarString.SEVEN)
                  }
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
                  value={GuitarString.TWELVE}
                  onChange={onCheckboxStringsChange}
                  disabled={
                    !getFilteredGuitars(guitars, '', '', filterType, filterStrings).some((guitar) => guitar.strings === GuitarString.TWELVE)
                  }
                />
                <span className={styles.text}>
                  12
                </span>
              </label>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
}
