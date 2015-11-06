import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const includes = [
      'tickets',
      'tickets.user',
      'bidders',
      'bidders.tickets',
      'bidders.tickets.user',
      'organization',
      'bid-groups',
      'bid-groups.auction-items',
      'bid-groups.auction-items.donation',
      'bid-groups.auction-items.donation.donation-donors',
      'bid-groups.auction-items.donation.donation-donors.donor',
      'bid-groups.auction-items.donation.donation-donors.donor.user',
    ];
    return this.get('store').findRecord('auction', params.auction_id, {
      adapterOptions: {
        query: {
          include: includes.join()
        }
      }
    });
  },

  actions: {
    destroyTicket(ticket) {
      ticket.destroyRecord().then(() => {
        this.controller.get('model.bidders').reload();
      });
    }
  }
});
