import React from 'react';
import styled from 'styled-components';
import { Cart, Icon } from 'components';

export const Wrap = styled(Cart)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Left = styled.div`
  width: 200px;
  padding: 23px 0;
  border-right: 1px solid #eceff1;
  text-align: center;

  > img {
    margin-bottom: 20px;
  }
`;

export const Right = styled.div`
  width: 365px;
  padding: 23px 25px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Time = styled.span`
  font-size: 32px;
  margin-bottom: 11px;
`;

export const Airport = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
  height: ;
`;

export const Date = styled.span`
  font-size: 12px;
  color: #8b9497;
`;

const StopsWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 4px;
`;

const StopsText = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: #8b9497;
`;

const StyledStopsDestination = styled.div`
  display: flex;
  align-items: center;
`;

const StopsLine = styled.div`
  width: 96px;
  height: 1px;
  background: #d2d5d6;
`;

const StopDestination = () => (
  <StyledStopsDestination>
    <StopsLine />
    <Icon name="plane" height="13" width="14" />
  </StyledStopsDestination>
);

const getStopsText = number => {
  if (!number) return 'Без пересадок';

  const lastSymbol = +number.toString().slice(-1);
  let endingWord = '';

  if (lastSymbol === 1) endingWord = 'кa';
  if (lastSymbol >= 2 && lastSymbol <= 4) endingWord = 'ки';
  if (lastSymbol >= 5 && lastSymbol <= 9) endingWord = 'ок';

  return `${number} пересад${endingWord}`;
};

export const Stops = ({ stops }) => (
  <StopsWrap>
    <StopsText>{getStopsText(stops)}</StopsText>
    <StopDestination />
  </StopsWrap>
);
