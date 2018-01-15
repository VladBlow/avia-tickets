const SET_ONE_FILTER = 'filter/SET_ONE_FILTER';
const SET_SOME_FILTER = 'filter/SET_SOME_FILTER';

export const setOneFilter = data => ({
  type: SET_ONE_FILTER,
  payload: data,
});

export const setSomeFilter = data => ({
  type: SET_SOME_FILTER,
  payload: data,
});

const initialState = {
  all: false,
  without: false,
  withOne: false,
  withTwo: false,
  withThree: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONE_FILTER:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case SET_SOME_FILTER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
