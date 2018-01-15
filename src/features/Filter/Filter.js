import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'components';

const Wrap = styled.div`
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
  state = {};

  render() {
    return (
      <Wrap>
        <Title>Количество пересадок</Title>
        <StyledCheckbox>Все</StyledCheckbox>
        <StyledCheckbox>Без пересадок</StyledCheckbox>
        <StyledCheckbox>1 пересадка</StyledCheckbox>
        <StyledCheckbox>2 пересадки</StyledCheckbox>
        <StyledCheckbox>3 пересадки</StyledCheckbox>
      </Wrap>
    );
  }
}
