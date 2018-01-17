import React, { Component } from 'react';
import firebase from 'r/firebase';
import { Ticket } from './Ticket';

export class Tickets extends Component {
  componentDidMount() {
    this.props.getTickets();

    const tickets = firebase.database().ref('tickets');

    tickets.once('value', snapshot => {
      this.props.getTicketsSuccess(snapshot.val());
    });
  }

  render() {
    const { tickets, isLoading } = this.props;

    if (isLoading) return <div>loading...</div>;

    return (
      // eslint-disable-next-line
      <div>{tickets.map((ticket, i) => <Ticket {...ticket} key={i} />)}</div>
    );
  }
}
