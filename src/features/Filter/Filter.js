import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox, Cart } from 'components';
import { getStopsText } from 'common/utils/ticket';

const Wrap = styled(Cart)`
  padding: 15px 0;
`;

const Title = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 0 10px 15px;
  letter-spacing: 0.7px;
`;

const OnlyButton = styled.button`
  display: none;
  border: none;
  outline: none;
  color: #3e9ce8;
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 8px 10px 8px 15px;

  :hover {
    background-color: #f1fcff;

    ${OnlyButton} {
      display: block;
    }
  }
`;

const CheckboxText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export class Filter extends Component {
  getCheckboxes = () => {
    const { activeFilters, pull, toggleOnlyFilter } = this.props;
    const isCheckedFunc = number => activeFilters.indexOf(number) !== -1;
    const isChecked = stops => isCheckedFunc(stops);

    return pull.map((item, i) => (
      <StyledCheckbox
        name={item}
        checked={isChecked(item)}
        onChange={this.handleOnChahge}
        key={i}
      >
        <CheckboxText>
          {getStopsText(item)}
          <OnlyButton onClick={() => toggleOnlyFilter(item)}>Только</OnlyButton>
        </CheckboxText>
      </StyledCheckbox>
    ));
  };

  handleOnChahge = ({ target: { checked, name } }) => {
    const number = +name;
    const { pull, toggleOneFilter, toggleAllFilters } = this.props;

    switch (number) {
      case -1: {
        toggleAllFilters(pull, checked);
        break;
      }

      default: {
        toggleOneFilter(number, checked);
      }
    }
  };

  render() {
    const { activeFilters, pull } = this.props;
    const isCheckedAll = activeFilters.length === pull.length;

    return (
      <Wrap>
        <Title>Количество пересадок</Title>
        <StyledCheckbox
          checked={isCheckedAll}
          name="-1"
          onChange={this.handleOnChahge}
        >
          <CheckboxText>Все</CheckboxText>
        </StyledCheckbox>
        {this.getCheckboxes()}
      </Wrap>
    );
  }
}
