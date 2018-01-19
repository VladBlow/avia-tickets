import { createSelector } from 'reselect';
import { filtersSelector } from 'features/Filter/filterSelector';

const ticketsSelector = state => state.tickets;

// const filterByStops = (array, stops) =>
//   array.filter(item => item.stops === stops);

export const filteredTicketsSelector = createSelector(
  filtersSelector,
  ticketsSelector,
  (filter, tickets) => {
    const { all, without, withOne, withTwo, withThree } = filter;

    if (all) return tickets;

    // return filterByStops(tickets);
    if (without) return tickets.filter(ticket => ticket.stops === 0);
    if (withOne) return tickets.filter(ticket => ticket.stops === 1);
    if (withTwo) return tickets.filter(ticket => ticket.stops === 2);
    if (withThree) return tickets.filter(ticket => ticket.stops === 3);
  },
);
