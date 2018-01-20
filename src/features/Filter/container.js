import { connect } from 'react-redux';
import { Filter } from './Filter';
import { activeFiltersSelector, pullFiltersSelector } from './selectors';
import { toggleOneFilter, toggleOnlyFilter, toggleAllFilters } from './ducks';

const mapStateToProps = state => ({
  activeFilters: activeFiltersSelector(state),
  pull: pullFiltersSelector(state),
});

const mapDispatchToProps = {
  toggleOneFilter,
  toggleOnlyFilter,
  toggleAllFilters,
};

export const FilterC = connect(mapStateToProps, mapDispatchToProps)(Filter);
