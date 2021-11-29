import {createReducer} from '@reduxjs/toolkit';
import {guitars} from '../mock-guitars';
import {changeFilterPriceFrom, changeFilterPriceTo, changeFilterType, changeFilterStrings} from './actions';

export const initialState = {
  guitars: guitars,
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
    });
});
