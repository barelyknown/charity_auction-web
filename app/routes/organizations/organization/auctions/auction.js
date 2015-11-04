import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyTicket(ticket) {
      ticket.destroyRecord();
    }
  }
});
