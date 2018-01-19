import { connect } from 'react-redux';
import { Filter } from './Filter';
import { filtersSelector } from './selectors';
import { toggleOneFilter, toggleSomeFilters } from './ducks';

const mapStateToProps = state => ({
  activeFilters: filtersSelector(state),
});

const mapDispatchToProps = {
  toggleOneFilter,
  toggleSomeFilters,
};

export const FilterC = connect(mapStateToProps, mapDispatchToProps)(Filter);
