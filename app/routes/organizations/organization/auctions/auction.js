import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const includes = [
      'tickets',
      'tickets.user',
      'bidders',
      'bidders.tickets',
      'bidders.tickets.user'
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
