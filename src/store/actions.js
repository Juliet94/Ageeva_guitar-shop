import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_SORT: 'data/changeSort',
};

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));
