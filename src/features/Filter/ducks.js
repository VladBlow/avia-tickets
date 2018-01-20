import { addElemToArray, removeElemFromArray } from './utils';
import { GET_TICKETS_SUCCESS } from 'features/Tickets/ducks';

const TOGGLE_ONE_FILTER = 'filter/TOGGLE_ONE_FILTER';
const TOGGLE_ONLY_FILTER = 'filter/TOGGLE_ONLY_FILTER';
const TOGGLE_ALL_FILTERS = 'filter/TOGGLE_ALL_FILTER';

export const toggleOneFilter = (id, status) => ({
  type: TOGGLE_ONE_FILTER,
  payload: id,
  meta: status,
});

export const toggleOnlyFilter = id => ({
  type: TOGGLE_ONLY_FILTER,
  payload: id,
});

export const toggleAllFilters = (array, status) => ({
  type: TOGGLE_ALL_FILTERS,
  payload: array,
  meta: status,
});

const initialState = {
  activeFilters: [],
  pull: [0, 1, 2, 3],
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ONE_FILTER: {
      const newActiveFilters = action.meta
        ? addElemToArray(state.activeFilters, action.payload)
        : removeElemFromArray(state.activeFilters, action.payload);

      return {
        ...state,
        activeFilters: newActiveFilters,
      };
    }

    case GET_TICKETS_SUCCESS: {
      const pull = action.payload.reduce((acc, ticket) => {
        if (acc.indexOf(ticket.stops) === -1) {
          acc = [...acc, ticket.stops];
        }
        return acc;
      }, []);

      return {
        ...state,
        pull: pull.sort((a, b) => a - b),
      };
    }

    case TOGGLE_ONLY_FILTER: {
      return {
        ...state,
        activeFilters: [action.payload],
      };
    }

    case TOGGLE_ALL_FILTERS: {
      let newActiveFilters = state.activeFilters;

      action.payload.reduce((acc, filter) => {
        const newArrayByFilter = action.meta
          ? addElemToArray(newActiveFilters, filter)
          : removeElemFromArray(newActiveFilters, filter);

        newActiveFilters = newArrayByFilter;

        return acc;
      }, newActiveFilters);

      return {
        ...state,
        activeFilters: newActiveFilters,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
