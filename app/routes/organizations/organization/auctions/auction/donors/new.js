import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('donor', {
      auction: this.modelFor('organizations.organization.auctions.auction')
    });
  }
});
