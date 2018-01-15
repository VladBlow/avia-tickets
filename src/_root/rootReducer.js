import { combineReducers } from 'redux';
import { filterReducer } from 'features/Filter';
import { ticketsReducer } from 'common/ducks/ticketsDucks';

export const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
});
