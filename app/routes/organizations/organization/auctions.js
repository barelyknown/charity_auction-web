import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAuction(auction) {
      auction.save().then((auction) => {
        this.transitionTo('organizations.organization.auctions.auction', auction);
      })
    },
    cancelEditAuction(auction) {
      if (auction.get('id')) {
        this.transitionTo('organizations.organization.auctions.auction', auction);
      } else {
        this.transitionTo('organizations.organization');
      }
    }
  }
});
