import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_FILTER_PRICE_FROM: 'data/changeFilterPriceFrom',
  CHANGE_FILTER_PRICE_TO: 'data/changeFilterPriceTo',
  CHANGE_FILTER_TYPE: 'data/changeFilterType',
  CHANGE_FILTER_STRINGS: 'data/changeFilterStrings',
  ADD_TO_CART: 'data/addToCart',
  DELETE_FROM_CART: 'data/deleteFromCart',
  CHANGE_QUANTITY: 'data/changeQuantity',
  INCREASE_TOTAL_PRICE: 'data/increaseTotalPrice',
  DECREASE_TOTAL_PRICE: 'data/decreaseTotalPrice',
  SET_DISCOUNT: 'data/setDiscount',
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

export const addToCart = createAction(ActionType.ADD_TO_CART, (cartItem) => ({
  payload: cartItem,
}));

export const deleteFromCart = createAction(ActionType.DELETE_FROM_CART, (cartItem) => ({
  payload: cartItem,
}));

export const changeQuantity = createAction(ActionType.CHANGE_QUANTITY, (quantity) => ({
  payload: quantity,
}));

export const increaseTotalPrice = createAction(ActionType.INCREASE_TOTAL_PRICE, (price) => ({
  payload: price,
}));

export const decreaseTotalPrice = createAction(ActionType.DECREASE_TOTAL_PRICE, (price) => ({
  payload: price,
}));

export const setDiscount = createAction(ActionType.SET_DISCOUNT, (price) => ({
  payload: price,
}));
