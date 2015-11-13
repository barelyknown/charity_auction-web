import Ember from 'ember';

export default Ember.Component.extend({
  unassignedTickets: Ember.computed('bidder.auction.tickets.@each.id','bidder.tickets.@each.id', function() {
    return this.get('bidder.auction.tickets').filter((ticket) => {
      return !this.get('bidder.tickets').mapBy('id').contains(ticket.get('id'));
    });
  }),

  actions: {
    removeTicket(ticket) {
      this.get('bidder.tickets').then((tickets) => {
        tickets.removeObject(ticket);
        this.get('bidder').save();
      });
    },

    addTicket(ticketId) {
      const ticket = this.get('unassignedTickets').find((ticket) => {
        return ticketId === ticket.get('id');
      });
      console.log(ticketId);
      this.get('bidder.tickets').pushObject(ticket);
      this.get('bidder').save();
    },

    save(bidder) {
      bidder.save();
    }
  }
});
