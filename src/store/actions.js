import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_FILTER_PRICE_FROM: 'data/changeFilterPriceFrom',
  CHANGE_FILTER_PRICE_TO: 'data/changeFilterPriceTo',
  CHANGE_FILTER_TYPE: 'data/changeFilterType',
  CHANGE_FILTER_STRINGS: 'data/changeFilterStrings',
};

export const changeFilterPriceFrom = createAction(ActionType.CHANGE_FILTER_PRICE_FROM, (filter) => ({
  payload: filter,
}));

export const changeFilterPriceTo = createAction(ActionType.CHANGE_FILTER_PRICE_TO, (filter) => ({
  payload: filter,
}));

export const changeFilterType = createAction(ActionType.CHANGE_FILTER_TYPE, (filter) => ({
  payload: filter,
}));

export const changeFilterStrings = createAction(ActionType.CHANGE_FILTER_STRINGS, (filter) => ({
  payload: filter,
}));
