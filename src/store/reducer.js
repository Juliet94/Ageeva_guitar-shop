import {createReducer} from '@reduxjs/toolkit';
import {guitars} from '../mock-guitars';
import {
  changeFilterPriceFrom,
  changeFilterPriceTo,
  changeFilterType,
  changeFilterStrings,
  addToCart,
  deleteFromCart,
  increaseTotalPrice,
  decreaseTotalPrice,
  changeQuantity,
  setDiscount
} from './actions';

export const initialState = {
  guitars: guitars,
  cart: [],
  totalPrice: 0,
  discount: 0,
  filter: {
    price: {
      from: '',
      to: '',
    },
    types: [],
    strings: [],
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterPriceFrom, (state, action) => {
      state.filter.price.from = action.payload;
    })
    .addCase(changeFilterPriceTo, (state, action) => {
      state.filter.price.to = action.payload;
    })
    .addCase(changeFilterType, (state, action) => {
      state.filter.types = action.payload;
    })
    .addCase(changeFilterStrings, (state, action) => {
      state.filter.strings = action.payload;
    })
    .addCase(addToCart, (state, action) => {
      if (state.cart.some((item) => item.id === action.payload.id)) {
        const index = state.cart.findIndex((item) => item.id === action.payload.id);

        state.cart[index].quantity ++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    })
    .addCase(deleteFromCart, (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(index, 1);
    })
    .addCase(changeQuantity, (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);

      state.cart[index].quantity = action.payload.quantity;
    })
    .addCase(increaseTotalPrice, (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    })
    .addCase(decreaseTotalPrice, (state, action) => {
      state.totalPrice = state.totalPrice - action.payload;
    })
    .addCase(setDiscount, (state, action) => {
      state.discount = action.payload;
    });
});
