import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveBid(bid) {
      bid.save().then((bid) => {
        bid.get('auctionItem').then((auctionItem) => {
          this.transitionTo('organizations.organization.auctions.auction.auction-items.auction-item.bids.bid', bid);
        });
      });
    }
  }
});
