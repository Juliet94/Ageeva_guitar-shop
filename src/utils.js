import {GUITARS_PER_PAGE, SortType, SortOrder} from './const';

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getSpaces = (number) => number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

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
