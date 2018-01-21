import React from 'react';
import { Button } from 'components';
import { getDate } from 'common/utils/date';
import {
  Wrap,
  Left,
  Right,
  Row,
  Time,
  Stops,
  Airport,
  Date,
} from './components';

const listCarriers = {
  tk: 'static/img/turkish-air.png',
  su: 'static/img/aeroflot.png',
  s7: 'static/img/s7.png',
  ba: 'static/img/ba.png',
};

export const Ticket = ticket => (
  <Wrap withHover>
    <Left>
      <img
        width="120"
        height="35"
        src={listCarriers[ticket.carrier.toLowerCase()]}
      />
      <Button>
        Купить <br /> за {ticket.price.toLocaleString()} Р
      </Button>
    </Left>
    <Right>
      <Row>
        <Time>{ticket.departure_time}</Time>
        <Stops stops={ticket.stops} />
        <Time>{ticket.arrival_time}</Time>
      </Row>
      <Row>
        <Airport>{`${ticket.origin}, ${ticket.origin_name}`}</Airport>
        <Airport>{`${ticket.destination_name}, ${ticket.destination}`}</Airport>
      </Row>
      <Row>
        <Date>{getDate(ticket.departure_date)}</Date>
        <Date>{getDate(ticket.arrival_date)}</Date>
      </Row>
    </Right>
  </Wrap>
);
