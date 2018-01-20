import { createSelector } from 'reselect';

export const filtersSelector = state => state.filters;

export const activeFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.activeFilters,
);

export const pullFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.pull,
);
