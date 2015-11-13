import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const auctionItem = this.modelFor('organizations.organization.auctions.auction.auction-items.auction-item');
    return this.get('store').createRecord('bid', {
      auctionItem: auctionItem
    });
  }
});
