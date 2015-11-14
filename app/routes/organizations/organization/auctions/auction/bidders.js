import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('bidders');
  },

  actions: {
    saveBidder(bidder) {
      bidder.save().then((bidder) => {
        this.transitionTo('organizations.organization.auctions.auction.bidders.bidder', bidder);
      })
    }
  }
});
