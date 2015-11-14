import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auction = this.modelFor('organizations.organization.auctions.auction');
    return auction.get('auctionItems');
  },
  actions: {
    saveAuctionItem(auctionItem) {
      auctionItem.save().then(() => {
        this.transitionTo('organizations.organization.auctions.auction');
      })
    }
  }
});
