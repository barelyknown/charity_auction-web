import Ember from 'ember';

export default Ember.Component.extend({
  unassignedTickets: Ember.computed('bidder.auction.tickets.@each.id','bidder.tickets.@each.id', function() {
    return this.get('bidder.auction.tickets').filter((ticket) => {
      return !this.get('bidder.tickets').mapBy('id').contains(ticket.get('id'));
    });
  }),

  saveAction: 'saveBidder',

  actions: {
    removeTicket(ticket) {
      this.get('bidder.tickets').removeObject(ticket);
    },

    addTicket(ticketId) {
      const ticket = this.get('unassignedTickets').find((ticket) => {
        return ticketId === ticket.get('id');
      });
      this.get('bidder.tickets').pushObject(ticket);
    },

    save(bidder) {
      this.sendAction('saveAction', bidder);
    }
  }
});
