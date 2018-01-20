import React, { Component, Fragment } from 'react';
import firebase from 'r/firebase';
import { Ticket } from './Ticket/index';

export class Tickets extends Component {
  componentDidMount() {
    this.props.getTickets();

    const tickets = firebase.database().ref('tickets');

    tickets.once('value', snapshot => {
      this.props.getTicketsSuccess(snapshot.val());
    });
  }

  render() {
    const { tickets, isLoading, activeFilters } = this.props;

    if (isLoading) return <Fragment>loading...</Fragment>;

    let filteredTickets = tickets.sort((a, b) => a.price - b.price);

    if (activeFilters.length) {
      filteredTickets = tickets.filter(
        ({ stops }) => activeFilters.indexOf(stops) !== -1,
      );
    }

    return (
      <Fragment>
        {filteredTickets.map((ticket, i) => <Ticket {...ticket} key={i} />)}
      </Fragment>
    );
  }
}
