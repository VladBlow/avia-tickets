import React from 'react';
import styled from 'styled-components';
import { Cart, Button, Icon } from 'components';

const Wrap = styled(Cart)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }
`;

const Left = styled.div`
  width: 200px;
  padding: 23px 0;
  border-right: 1px solid #eceff1;
  text-align: center;

  > img {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 365px;
  padding: 23px 25px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Time = styled.span`
  font-size: 32px;
  margin-bottom: 11px;
`;

const Airport = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
  height: ;
`;

const Date = styled.span`
  font-size: 12px;
  color: #8b9497;
`;

const Stops = styled.div`
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

const StopsS = () => (
  <Stops>
    <StopsText>1 пересадка</StopsText>
    <StopDestination />
  </Stops>
);

export const Ticket = ticket => (
  <Wrap withHover>
    <Left>
      <img
        width="120"
        height="35"
        src="/static/img/turkish-air.png"
        srcSet="/static/img/turkish-air@2x.png"
        alt="Turkish Airlanes"
      />
      <Button>
        Купить <br /> за {ticket.price} Р
      </Button>
    </Left>
    <Right>
      <Row>
        <Time>{ticket.departure_time}</Time>
        <StopsS />
        <Time>{ticket.arrival_time}</Time>
      </Row>
      <Row>
        <Airport>{`${ticket.origin}, ${ticket.origin_name}`}</Airport>
        <Airport>{`${ticket.destination_name}, ${ticket.destination}`}</Airport>
      </Row>
      <Row>
        <Date>{ticket.departure_date}</Date>
        <Date>{ticket.arrival_date}</Date>
      </Row>
    </Right>
  </Wrap>
);
