import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAuctionItem(auctionItem) {
      auctionItem.save().then(() => {
        this.transitionTo('organizations.organization.auctions.auction');
      })
    }
  }
});
