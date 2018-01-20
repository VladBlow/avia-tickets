import { connect } from 'react-redux';
import { activeFiltersSelector } from 'features/Filter/selectors';
import { Tickets } from './Tickets';
import { getTicketsSuccess, getTickets } from './ducks';

const mapStateToProps = state => ({
  activeFilters: activeFiltersSelector(state),
  tickets: state.tickets.data,
  isLoading: state.tickets.isLoading,
});

const mapDispatchToProps = {
  getTicketsSuccess,
  getTickets,
};

export const TicketsC = connect(mapStateToProps, mapDispatchToProps)(Tickets);
