import {createReducer} from '@reduxjs/toolkit';
import {guitars} from '../mock-guitars';
import {changeSort} from './actions';

export const initialState = {
  guitars: guitars,
  activeSortType: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSort, (state, action) => {
      state.activeSortType = action.payload;
    });
});
