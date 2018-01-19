import { combineReducers } from 'redux';
import { filtersReducer } from 'features/Filter';
import { ticketsReducer } from 'features/Tickets';

export const rootReducer = combineReducers({
  filters: filtersReducer,
  tickets: ticketsReducer,
});
