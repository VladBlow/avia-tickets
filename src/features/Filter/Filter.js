import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox, Cart } from 'components';

const Wrap = styled(Cart)`
  padding: 15px 0;
`;

const Title = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 0 10px 15px;
  letter-spacing: 0.7px;
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 8px 15px;

  :hover {
    background-color: #f1fcff;
  }
`;

export class Filter extends Component {
  handleOnChahge = ({ target: { checked, name } }) => {
    const number = +name;
    const { toggleOneFilter, toggleSomeFilters } = this.props;

    switch (number) {
      case -1: {
        toggleSomeFilters([-1, 0, 1, 2, 3], checked);
        break;
      }

      default: {
        toggleOneFilter(number, checked);
      }
    }
  };

  render() {
    const { activeFilters } = this.props;
    const isCheckedFunc = number => activeFilters.indexOf(number) !== -1;
    const isCheckedAll = isCheckedFunc(-1);
    const isChecked = stops => isCheckedAll || isCheckedFunc(stops);

    return (
      <Wrap>
        <Title>Количество пересадок</Title>
        <StyledCheckbox
          checked={isCheckedAll}
          name="-1"
          onChange={this.handleOnChahge}
        >
          Все
        </StyledCheckbox>
        <StyledCheckbox
          name="0"
          checked={isChecked(0)}
          onChange={this.handleOnChahge}
        >
          Без пересадок
        </StyledCheckbox>
        <StyledCheckbox
          name="1"
          checked={isChecked(1)}
          onChange={this.handleOnChahge}
        >
          1 пересадка
        </StyledCheckbox>
        <StyledCheckbox
          name="2"
          checked={isChecked(2)}
          onChange={this.handleOnChahge}
        >
          2 пересадки
        </StyledCheckbox>
        <StyledCheckbox
          name="3"
          checked={isChecked(3)}
          onChange={this.handleOnChahge}
        >
          3 пересадки
        </StyledCheckbox>
      </Wrap>
    );
  }
}
