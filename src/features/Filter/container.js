import { connect } from 'react-redux';
import { Filter } from './Filter';
import { filterSelector } from './selectors';
import { setOneFilter, setSomeFilter } from './ducks';

const mapStateToProps = state => ({
  ...filterSelector(state),
});

const mapDispatchToProps = {
  setOneFilter,
  setSomeFilter,
};

export const FilterC = connect(mapStateToProps, mapDispatchToProps)(Filter);
