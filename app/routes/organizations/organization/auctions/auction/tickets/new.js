import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return this.store.createRecord('ticket', {
      auction: auction
    });
  }
});
