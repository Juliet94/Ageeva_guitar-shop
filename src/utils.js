/* eslint-disable */
import {GUITARS_PER_PAGE, SortType, SortOrder} from './const';

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getSpaces = (number) => number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

export const getNumber = (str) => {

  if (typeof str === 'string') {
    return Number(str.replace(/\D+/g, ''));
  }
  return str;
};

export const getPaginatedGuitars = (guitars, page) => guitars.slice(page * GUITARS_PER_PAGE - GUITARS_PER_PAGE, page * GUITARS_PER_PAGE );

export const getSortedGuitars = (guitars, sortType, sortOrder) => {
  if (sortType === SortType.PRICE && sortOrder === SortOrder.UP) {
    return guitars.slice().sort((a, b) => a.price - b.price);
  }
  if (sortType === SortType.PRICE && sortOrder === SortOrder.DOWN) {
    return guitars.slice().sort((a, b) => b.price - a.price);
  }
  if (sortType === SortType.POPULAR && sortOrder === SortOrder.UP) {
    return guitars.slice().sort((a, b) => a.popularity - b.popularity);
  }
  if (sortType === SortType.POPULAR && sortOrder === SortOrder.DOWN) {
    return guitars.slice().sort((a, b) => b.popularity - a.popularity);
  }

  return guitars;
};

const getFilteredByPrice = (guitars, priceFrom, priceTo) => {
  const filteredByPriceGuitars = [];

  if (priceFrom && !priceTo) {
    filteredByPriceGuitars.push(guitars.filter((guitar) => guitar.price >= priceFrom));
  }

  if (!priceFrom && priceTo) {
    filteredByPriceGuitars.push(guitars.filter((guitar) => guitar.price <= priceTo));
  }

  if (priceFrom && priceTo) {
    filteredByPriceGuitars.push(guitars.filter((guitar) => (priceFrom <= guitar.price) && (guitar.price <= priceTo)));
  }

  return filteredByPriceGuitars.flat();
};

export const getFilteredGuitars = (guitars, priceFrom, priceTo, filterType, filterStrings) => {
  const filteredGuitars = [];

  if ((priceFrom || priceTo) && !(filterType.length !== 0) && !(filterStrings.length !== 0)) {
    filteredGuitars.push(getFilteredByPrice(guitars, priceFrom, priceTo));
  }

  if (filterType.length !== 0) {
    const filteredType = guitars.filter((guitar) => filterType.some((filterGuitar) => guitar.typeFilter === filterGuitar));

    (priceFrom || priceTo) ? filteredGuitars.push(getFilteredByPrice(filteredType, priceFrom, priceTo)) : filteredGuitars.push(filteredType);
  }

  if (filterStrings.length !== 0) {
    const filteredStrings = guitars.filter((guitar) => filterStrings.some((filterGuitar) => guitar.strings === filterGuitar));

    (priceFrom || priceTo) ? filteredGuitars.push(getFilteredByPrice(filteredStrings, priceFrom, priceTo)) : filteredGuitars.push(filteredStrings);
  }

  if (!priceFrom && !priceTo && (filterType.length === 0) && (filterStrings.length === 0)) {
    return guitars;
  } else {
    return  filteredGuitars.flat();
  }
};
