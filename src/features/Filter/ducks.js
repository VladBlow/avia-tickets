const TOGGLE_ONE_FILTER = 'filter/TOGGLE_ONE_FILTER';
const TOGGLE_SOME_FILTERS = 'filter/TOGGLE_SOME_FILTER';

export const toggleOneFilter = (id, status) => ({
  type: TOGGLE_ONE_FILTER,
  payload: id,
  meta: status,
});

export const toggleAllFilters = (array, status) => ({
  type: TOGGLE_SOME_FILTERS,
  payload: array,
  meta: status,
});

const initialState = {
  activeFilters: [],
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

    case TOGGLE_SOME_FILTERS: {
      let newFilters = state.activeFilters;

      action.payload.reduce((acc, filter) => {
        const newArrayByFilter = action.meta
          ? addElemToArray(newFilters, filter)
          : removeElemFromArray(newFilters, filter);

        newFilters = newArrayByFilter;

        return acc;
      }, newFilters);

      return {
        ...state,
        activeFilters: newFilters,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
