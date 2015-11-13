import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveBidder(bidder) {
      bidder.save().then((bidder) => {
        this.transitionTo('organizations.organization.auctions.auction.bidders.bidder', bidder);
      })
    }
  }
});
