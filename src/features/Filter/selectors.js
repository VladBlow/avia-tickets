import { createSelector } from 'reselect';

export const filtersSelector = state => state.filters;

export const filtersByKeySelector = createSelector(
  filtersSelector,
  filter => key => filter[key],
);
