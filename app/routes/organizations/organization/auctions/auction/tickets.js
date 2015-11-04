import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTicket(ticket) {
      ticket.save().then((ticket) => {
        this.transitionTo('organizations.organization.auctions.auction');
      });
    }
  }
});
