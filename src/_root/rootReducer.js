import { combineReducers } from 'redux';
import { filterReducer } from 'features/Filter';

export const rootReducer = combineReducers({
  filter: filterReducer,
});
