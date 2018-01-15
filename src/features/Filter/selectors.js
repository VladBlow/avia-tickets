import { createSelector } from 'reselect';

export const filterSelector = state => state.filter;

export const filterByKeySelector = createSelector(
  filterSelector,
  filter => key => filter[key],
);
