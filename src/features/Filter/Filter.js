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
  handleOnChahge = ({ target: { checked } }, key) => {
    const { setOneFilter, setSomeFilter } = this.props;

    switch (key) {
      case 'all': {
        setSomeFilter({
          all: checked,
          without: checked,
          withOne: checked,
          withTwo: checked,
          withThree: checked,
        });
        break;
      }

      case 'without': {
        setSomeFilter({
          without: checked,
          withOne: false,
          withTwo: false,
          withThree: false,
        });
        break;
      }

      default: {
        setOneFilter({ key, value: checked });
      }
    }
  };

  render() {
    const { all, without, withOne, withTwo, withThree } = this.props;

    // If we picked All/Without filter, we can't choose with transplant
    const isDisableWithTransplant = all || without;

    return (
      <Wrap>
        <Title>Количество пересадок</Title>
        <StyledCheckbox
          checked={all}
          onChange={e => this.handleOnChahge(e, 'all')}
        >
          Все
        </StyledCheckbox>
        <StyledCheckbox
          disabled={all}
          checked={without}
          onChange={e => this.handleOnChahge(e, 'without')}
        >
          Без пересадок
        </StyledCheckbox>
        <StyledCheckbox
          disabled={isDisableWithTransplant}
          checked={withOne}
          onChange={e => this.handleOnChahge(e, 'withOne')}
        >
          1 пересадка
        </StyledCheckbox>
        <StyledCheckbox
          disabled={isDisableWithTransplant}
          checked={withTwo}
          onChange={e => this.handleOnChahge(e, 'withTwo')}
        >
          2 пересадки
        </StyledCheckbox>
        <StyledCheckbox
          disabled={isDisableWithTransplant}
          checked={withThree}
          onChange={e => this.handleOnChahge(e, 'withThree')}
        >
          3 пересадки
        </StyledCheckbox>
      </Wrap>
    );
  }
}
