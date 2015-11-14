import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('tickets').then((tickets) => {
      const ticketNumbers = tickets.filterBy('isNew', false).mapBy('number');
      const lastTicketNumber = ticketNumbers.sort((a, b) => {
        const intA = parseInt(a);
        const intB = parseInt(b);
        if (intA < intB) {
          return -1;
        } else {
          return 1;
        }
      }).get('lastObject');
      var nextTicketNumber;
      if (lastTicketNumber) {
        nextTicketNumber = (parseInt(lastTicketNumber) + 1).toString();
      } else {
        nextTicketNumber = "1";
      }
      return this.store.createRecord('ticket', {
        auction: auction,
        number: nextTicketNumber
      });
    })
  }
});
