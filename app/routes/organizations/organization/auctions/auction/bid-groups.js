import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveBidGroup(bidGroup) {
      bidGroup.save().then(() => {
        this.transitionTo('organizations.organization.auctions.auction');
      });
    }
  }
});
