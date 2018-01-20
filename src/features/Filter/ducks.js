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

const addElemToArray = (arr, el) =>
  arr.indexOf(el) === -1 ? [...arr, el] : arr;

const removeElemFromArray = (arr, el) =>
  arr.indexOf(el) >= 0 ? arr.filter(item => item !== el) : arr;

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
