import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTicket(ticket) {
      ticket.save().then((ticket) => {
        ticket.get('auction.bidders').reload();
        this.transitionTo('organizations.organization.auctions.auction');
      });
    }
  }
});
