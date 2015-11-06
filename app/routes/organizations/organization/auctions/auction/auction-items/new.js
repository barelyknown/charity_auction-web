import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return this.get('store').createRecord('auction-item', {
      auction: auction
    });
  }
});
