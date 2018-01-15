import { tickets } from './mock';

const initialState = {
  ...tickets,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
