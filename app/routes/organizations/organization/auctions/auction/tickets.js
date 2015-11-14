import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('tickets');
  },

  actions: {
    saveTicket(ticket) {
      ticket.save().then((ticket) => {
        ticket.get('auction.bidders').reload();
        this.transitionTo('organizations.organization.auctions.auction.tickets.ticket', ticket);
      });
    }
  }
});
