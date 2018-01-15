import { combineReducers } from 'redux';
import { filterReducer } from 'features/Filter';
import { ticketsReducer } from 'features/Tickets';

export const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
});
